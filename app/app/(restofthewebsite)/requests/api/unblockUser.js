export default async function unblockUser(data) {
    const response = await fetch(`http://499-new-lb-420614602.ca-central-1.elb.amazonaws.com:6969/unblockUser/api`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: "no-cache",
      credentials: "include"
    });
    let resBody = await response.json();
    console.log(resBody.message);
    return resBody;
  }

  