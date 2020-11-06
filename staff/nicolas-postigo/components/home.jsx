const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = { subview: 'search' }
    }

    componentWillMount() {
        const { token } = sessionStorage

        retrieveUser(token, (error, user) => {
            if (error) return alert(error.message)

            this.setState({ user })
        })
    }

    handleGoToProfile = () => {
        this.setState({ subview: 'profile' })
    }

    handleModifyUser = (fullname, image) => {
        const { token } = sessionStorage

        modifyUser(token, { fullname, image }, error => {
            if (error) alert(error.message)

            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                this.setState({ user })
            })
        })
    }

    handleLikeCovid = countryId => {
        const { token } = sessionStorage

        toggleLikeCovid(token, countryId, error => {
            if (error) return alert(error.message)

            const { state: { country, query } } = this

            if (country)
                this.handleGoToCountry(countryId)
            else
                this.handleSearchCovid(query)
        })
    }

    handleSearchCovid = query => {
        const { token } = sessionStorage

        try {
            searchCovidCountries(token, query, (error, countries) => {
                if (error) return alert(error.message)

                this.setState({ countries, country: undefined, query, subview: 'search-covid' })
            })
        } catch ({ message }) {
            alert(message)
        }
    }

    handleGoToCountry = countryId => {
        const { token } = sessionStorage

        retrieveCovidCountry(token, countryId, (error, country) => {
            if (error) return alert(error.message)

            this.setState({ subview: "search-covid", country})
        }
        )
    }
    handleGoToSearchCovidSearcher = () => this.setState({ subview: 'search-covid' })

    render() {
        const { state: { subview, countries, country, user }, handleGoToSearchCovidSearcher, handleGoToProfile, handleSearchCovid, handleGoToCountry, handleLikeCovid, handleModifyUser } = this

        return <>
            {user && <Welcome name={user.fullname} image={user.image} />}

            <div class="button_container">
                <button className="search_button" onClick={handleGoToSearchCovidSearcher}>Search</button>

                <button className="profile_button" onClick={handleGoToProfile}>Profile</button>
            </div>

            {subview === 'search-covid' && <>
                <SearchCovid onSearchCountry={handleSearchCovid} />

                {!country && countries && <ResultsCovid items={countries} user={user} onCountry={handleGoToCountry} onLike={handleLikeCovid} />}

                { country && <DetailCovid item={country} onLike={handleLikeCovid} />}
            </>}

            {subview === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} image={user.image} />}
        </>
    }
} 