
export const fetchPlayers = () => {
    return (dispatch) => {(
        fetch('http://localhost:8080/demo/all')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            dispatch({ type: 'loadPlayers', loadedPlayers: data });
        })
        .catch(console.log)
    )};
}

export const postNewPlayer = (player) => {
    return () => {(
        fetch('http://localhost:8080/demo/add', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          })
    )};
}

export const deletePlayer = (id) => {
  return () => {(
      fetch(`http://localhost:8080/demo/player/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
  )};
}


export const selectPlayer = (player) => {
    return { type: 'addPlayer', player };
}