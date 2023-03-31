const Profile = ({fullName,bio,profession,children}) => {
    const handleName = () => alert (`Hello ${fullName}`)
    return (
        <div>
            {children}
            <h1> FULLNAME: </h1>
            <p> {fullName}</p>

            <h1> BIO: </h1>
            <p> {bio}</p>

            <h1> PROFESSION </h1>
            <p> {profession}</p>
            {handleName()}
        </div>
      )
};

Profile.defaultProps = {
    fullName: "please Enter Your Name",
    bio: "fill your bio",
    Profession: "please Input your Profession"
}
 
export default Profile;

