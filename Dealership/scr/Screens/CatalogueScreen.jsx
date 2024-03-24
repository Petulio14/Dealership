import React from 'react'
import VehicleList from './VehicleList'

const Catalogue = () => {
  const vehicles =[
    {
      id: 1,
      imageUrl: 'https://cdn.group.renault.com/ren/co/vehicles/logan/design/exterior/logan-lateral-exterior.jpg.ximg.xsmall.jpg/210c18118f.jpg',
      description: 'Renoult Logan',
      price: 25000000,
    },
    {
      id: 2,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/00-02_Mazda_626_LX.jpg',
      description: 'Mazda 626',
      price: 15000000,
    },
    {
      id: 3,
      imageUrl: 'https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2018-camaro/04-images/negro-camaro-six-ss-2018.jpg?imwidth=960',
      description: 'chevrolet camaro',
      price: 25000000,
    },
  ]

  return <VehicleList vehicles={vehicles}/>
}

export default Catalogue
