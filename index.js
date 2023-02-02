function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = confirm(
    `Escalar ${name}, na posição de ${position}, com o numero ${number}?`
  );

  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerList = document.createElement("li");
    playerList.id = `Player: ${number}`;
    playerList.innerText = `${position}: ${name} (${number})`;
    teamList.appendChild(playerList);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberForRemove").value;
  const removedPlayer = document.getElementById(`Player: ${number}`);

  const confirmation = confirm(`Deseja remover o jogador ${number}?`);

  if (confirmation) {
    document.getElementById("teamList").removeChild(removedPlayer);
    document.getElementById("numberForRemove").value = "";
  }
}
