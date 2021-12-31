
$("#contForm").submit(async function (e) { 
    e.preventDefault();

    const form = new FormData(this);

    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'aplication/json'
        }
    })
    
    if(response.ok){
        this.reset();

        $("#msgEnviado").fadeIn("slow").fadeOut(5000);

    }
    
});