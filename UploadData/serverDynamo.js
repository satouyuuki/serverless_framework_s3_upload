const URL = 'https://6noeb297da.execute-api.us-east-1.amazonaws.com/dev/get-player-score';
const CREATEURL = 'https://6noeb297da.execute-api.us-east-1.amazonaws.com/dev/create-player-score';
window.addEventListener('DOMContentLoaded', () => {
  document.forms['form1'].addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(document.forms['form1']);
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

  document.forms['form2'].addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(document.forms['form2']);
    const newData = {};
    newData.ID = data.get('ID');
    newData.Name = data.get('Name');
    newData.Score = data.get('Score');
    try {
      const res = await (await fetch(`${CREATEURL}/${newData.ID}`, {
        method: 'POST',
        body: JSON.stringify(newData)
      })).json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });  
})
