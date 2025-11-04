document.addEventlistener('DOMcontentloaded', () =>{   
  const toggleMenu = () =>{
    const menu = document.getElementeById('navMenu');
    if(menu)menu.classList.toggle('active');
  };
  
  window.toggleMenu = toggleMenu;
  
  const scrollToSection = (sectionId) =>{
    const section = document.getElementeById('sectionId');
    
    if(!section) return;
    
    const headerHeight = 70;
    
    const sectionPosition = section.offsetTop - headerHeight;
    window.scrollTo({top: sectionPosition, behavior: 'smooth'});
    
    const menu = document.getElementById('navMenu');
    if(menu) menu.classList.remove('active');
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = document.getElementById('volunteerForm');
    if(!form) return;
    
    if(form.dataset.submmiting === 'true') return;
    form.dataset.submmiting = 'true';
    
    if(!nome || ! 
    email){alert('Por favor, preencha os campos');
      form.dataset.submmiting = 'false';
      return;
    }
    const formData ={
      nome,
      email,
      telefone: form.telefone.value.trim(),
    idade: form.idade.value.trim(),
      disponibilidade: form.disponibilidade.value.trim(),
      areaDeInteresse: form.areaDeInteresse.value.trim(),
      dataCadastro: new Date().toLocaleString()
    };
    let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);
    voluntarios.push(formData);
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));
    
    const sucessMessage = document.getElementById('sucessMessage')
    sucessMessage.classList.add('show');
    sucessMessage.scrollIntoView({behavior: "smooth", block: 'center'});
  }
  
  setTimeout(() => sucessMessage.classList.remove('show'), 5000);
  
  setTimeout(() =>{
    form.reset();
    form.dataset.submmiting = 'false';
  }, 2000);
  
  exibirVoluntarios();
  };
  
  const form = document.getElementById('volunteerForm');
  if(form) form.addEventlistener('submit', handleSubmit);
  
  const exibirVoluntarios = () =>{ 
    const voluntarios= JSON.parse(localStorage.getItem('voluntarios') || []);
    
    const tabelaContainer = document.getElementById('tabelaVoluntarios');
    
    if(!tabelaContainer) return;
    
    if(voluntarios.lenght ===0){
      tabelaContainer.innerHTML = '<p>Ninguém cadastrado ainda.</p>';
      return;
    }
    
    let html = '<table border="1" cellpadding="5" cellpadding="0"';
    html += '<tr><th>nome</th></tr><tr><th>email</th></tr><tr><th>telefone</th></tr><tr><th>idade</th></tr><tr><th>disponibilidade</th></tr><tr><th>areaDeInteresse</th></tr>';
    
  
});