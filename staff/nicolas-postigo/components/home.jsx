const { Component } = React

class Home extends Component {
    constructor() {
        super()

        this.state = {}
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

   handleSearchVehicles = query => {
       const { token } = sessionStorage

        try {
            searchVehicles(token, query, (error, vehicles) => {
                if (error) return alert(error.message)

                vehicles = vehicles.map(({ id, name: title, thumbnail: image, price, like }) => ({ id, title, image, price, like }))

                this.setState({ vehicles, vehicle: undefined, query })
            })
        } catch ({ message }) {
            alert(message)
        }
    } 

    handleSearchVehicles2 = query => {
        const { token } = sessionStorage
 
         try {
             searchVehicles2(token, query, (error, vehicles) => {
                 if (error) return alert(error.message)
 
                 vehicles = vehicles.map(({ id, name: title, thumbnail: image, price, like }) => ({ id, title, image, price, like }))
 
                 this.setState({ vehicles, vehicle: undefined, query })
             })
         } catch ({ message }) {
             alert(message)
         }
     } 
     
    handleSearchCovid = query => {
        const { token } = sessionStorage
        console.log(query)
        try {
            searchCovid(token, query, (error, array) => {
                if (error) return alert(error.message)
                console.log(array)
                const {country: title, cases, todayCases, deaths, recovered, like} = array
                //array = array.map(({ country: title, cases, todayCases, deaths, recovered, like }) => ({ title, cases, todayCases, deaths, recovered, like }))

                this.setState({ filter: { title, cases, todayCases, deaths, recovered, like}, covidCountry: undefined, query })
            })
        } catch ({ message }) {
            alert(message)
        }
    }


    handleGoToVehicle = vehicleId => {
        const { token } = sessionStorage

        retrieveVehicle(token, vehicleId, (error, vehicle) => {
            if (error) return alert(error.message)

            const { id, name: title, year, description: preview, price, url, image, like } = vehicle

            this.setState({ vehicle: { id, title, year, preview, price, url, image, like } })
        })
    }

    handleLike = vehicleId => {
        const { token } = sessionStorage

        toggleLikeVehicle(token, vehicleId, error => {
            if (error) return alert(error.message)

            const { state : { vehicle }} = this

            if (vehicle)
                this.handleGoToVehicle(vehicleId)
            else
                this.handleSearchVehicles(this.state.query)
        })
    }

    render() {
        const { state: { covidCountry, filter, subview, vehicles, vehicle, user }, handleGoToProfile, handleModifyUser, handleSearchVehicles, handleSearchVehicles2, handleSearchCovid, handleGoToVehicle, handleLike } = this

        return <>
            {user && <Welcome name={user.fullname} image={user.image} />}

            <div className="profile"><button className="profile__button" onClick={handleGoToProfile}>PROFILE</button></div>

            {subview === 'profile' && <Profile onModify={handleModifyUser} fullname={user.fullname} image={user.image} />}

            <h2>Vehicles</h2>

            <Search onSearch={handleSearchVehicles} />

            <Search onSearch2={handleSearchVehicles2} />

            <Search2 onSearch2={handleSearchCovid} /> 

            {!vehicle && vehicles && <Results items={vehicles} currency="$" onItem={handleGoToVehicle} onLike={handleLike} />}

            {!covidCountry && filter && <Results2 itemsFilter={filter}/>}

            { vehicle && <Detail item={vehicle} currency="$" onLike={handleLike} />}
        </>
    }
} 