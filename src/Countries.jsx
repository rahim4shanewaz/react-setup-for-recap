export default function Countries({ user }) {
 

    return (
        <div style={{ display:"flex", alignItems:"center", gap:"10px", border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h4>User Name: {user?.name}</h4>
            <p>Email: {user?.email}</p>
            <p>City: {user?.address?.city}</p>
        </div>
    );
}