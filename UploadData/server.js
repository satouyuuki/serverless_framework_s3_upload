const URL = 'https://6noeb297da.execute-api.us-east-1.amazonaws.com/dev/get-user';
window.addEventListener('DOMContentLoaded', () => {
  document.forms[0].addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(document.forms[0]);
    const param = data.get('param');
    try {
      const res = await (await fetch(`${URL}/${param}`)).json();
      if (res.message) {
        document.getElementById('postList').innerHTML = `
          <p>${res.message}</p>
        `;
      }
      // console.log(res);
      document.getElementById('postList').innerHTML = `
      <p>${res.name}</p>
      <p>${res.age}</p>
      <p>${res.job}</p>
    `;
    } catch (error) {
      console.log(error);
    }
  });  
})
