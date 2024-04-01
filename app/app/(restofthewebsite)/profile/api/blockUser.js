export default async function blockUser(data){
    const response = await fetch('http://499-new-lb-420614602.ca-central-1.elb.amazonaws.com:6969/blockUser/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: "include",
    });

    let resBody = await response.json(); // Retrieve response body and turn into JSON object
    console.log(resBody);
    return resBody.data;
   }