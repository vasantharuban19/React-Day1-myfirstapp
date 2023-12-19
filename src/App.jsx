function App() {
  const users = [{
    name:"Vasanth",
    email:"vasanthruban1920@gmail.com",
    phone:"9944016075"
  },
  {
    name:"Sasee",
    email:"sasee@gmail.com",
    phone:"994867676"
  },
  {
    name:"SathyaPk",
    email:"sathyapk@gmail.com",
    phone:"994487563"
  },
  {
    name:"Prince",
    email:"prince@gmail.com",
    phone:"99876541"
  }]
  return <>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((e,i)=>{
          return <tr>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.phone}</td>
          </tr>
        })
      }
    </tbody>
  </table>
  </>
}

export default App
