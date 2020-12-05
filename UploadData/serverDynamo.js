const URL = 'https://6noeb297da.execute-api.us-east-1.amazonaws.com/dev/get-player-score';
window.addEventListener('DOMContentLoaded', () => {
  document.forms[0].addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(document.forms[0]);
    const param = data.get('param');
    try {
      const res = await (await fetch(`${URL}/${param}`)).json();
      const postList = document.getElementById('postList');
      if (res && res.message) {
        postList.innerHTML = `
          <p style="color: red;">${res.message}</p>
        `;    
      }
      if (res && res.user) {
        postList.innerHTML = `
          <p>ID: ${res.user.ID}</p>
          <p>Name: ${res.user.Name}</p>
          <p>Score: ${res.user.Score}</p>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  });  
})
