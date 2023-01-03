$('button').click(e=>{
    const audio = e.target.children[0];
    console.log(e.target.id)
    $('#display').text(e.target.id)
    play(audio)
})

const play = (audio) =>{
    audio.play();
}

window.addEventListener('keydown',e=>{
    
    const ltr = e.key.toUpperCase()
    const audio = $(`#${ltr}`)[0]
    if(!audio)return;
    //$('#display').text(ltr)
    play(audio)
    
})