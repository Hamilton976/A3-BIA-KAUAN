const guideData = {
  hands: {
    icon: "✋", title: "Higienização das mãos", subtitle: "Uma das medidas mais importantes para prevenir a transmissão de microrganismos.",
    steps: ["Molhe as mãos e aplique sabonete líquido suficiente.", "Esfregue palmas, dorso, entre os dedos, polegares, unhas e pontas dos dedos.", "Enxágue bem e seque com material limpo e apropriado.", "Em serviços de saúde, siga os momentos e a técnica recomendados pelo protocolo institucional."],
    note: "Água e sabonete são indicados quando as mãos estão visivelmente sujas. Preparações alcoólicas podem ser usadas conforme as orientações de saúde aplicáveis."
  },
  ppe: {
    icon: "♧", title: "Equipamentos de proteção", subtitle: "O EPI deve ser escolhido de acordo com o risco e a atividade realizada.",
    steps: ["Avalie os riscos da atividade e consulte o protocolo do local.", "Escolha o equipamento indicado, como luvas, máscara, proteção ocular ou avental, conforme o risco.", "Verifique se o EPI está íntegro e se ajusta corretamente.", "Retire os equipamentos com cuidado para evitar contaminação e higienize as mãos após a retirada."],
    note: "Luvas não substituem a higienização das mãos. Treinamento e protocolos locais são essenciais para colocar e retirar EPIs corretamente."
  },
  surfaces: {
    icon: "✧", title: "Limpeza de superfícies", subtitle: "A limpeza adequada ajuda a reduzir a presença de sujeira e microrganismos no ambiente.",
    steps: ["Identifique o produto e o procedimento autorizados para aquela superfície.", "Utilize os EPIs indicados no rótulo e no protocolo local.", "Respeite a diluição, o modo de aplicação e o tempo de contato informados pelo fabricante.", "Evite misturar produtos químicos e guarde-os conforme as instruções de segurança."],
    note: "Em estabelecimentos de saúde, siga o protocolo de limpeza e desinfecção da instituição. Nunca misture água sanitária com outros produtos."
  }
};
const guideContent = document.getElementById("guideContent");
function renderGuide(key) {
  const item = guideData[key];
  guideContent.innerHTML = `<div class="guide-content-head"><span class="guide-tab-icon">${item.icon}</span><div><h3>${item.title}</h3><span class="subheading">${item.subtitle}</span></div></div><ol class="step-list">${item.steps.map((step, i) => `<li><span class="step-number">${String(i + 1).padStart(2, "0")}</span><span>${step}</span></li>`).join("")}</ol><div class="guide-note"><strong>Importante:</strong> ${item.note}</div>`;
}
document.querySelectorAll(".guide-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".guide-tab").forEach(tab => { tab.classList.remove("selected"); tab.setAttribute("aria-selected", "false"); });
    button.classList.add("selected");
    button.setAttribute("aria-selected", "true");
    renderGuide(button.dataset.guide);
  });
});
renderGuide("hands");

const dailyTasks = [...document.querySelectorAll(".daily-task")];
const taskCount = document.getElementById("checklistCount");
const taskProgress = document.getElementById("checklistProgress");
function updateTasks() {
  const done = dailyTasks.filter(task => task.checked).length;
  taskCount.textContent = `${done}/3 concluídos`;
  taskProgress.style.width = `${done / dailyTasks.length * 100}%`;
}
dailyTasks.forEach(task => task.addEventListener("change", updateTasks));

const questionBank = [
  { q: "Qual atitude ajuda a reduzir a transmissão de microrganismos?", options: ["Compartilhar objetos sem higienizar", "Higienizar as mãos nos momentos indicados", "Usar luvas o dia inteiro sem trocar", "Misturar produtos de limpeza"], answer: 1, explanation: "A higiene das mãos, feita corretamente e nos momentos indicados, é uma medida fundamental de prevenção." },
  { q: "O uso de luvas elimina a necessidade de higienizar as mãos?", options: ["Sim, em qualquer situação", "Sim, se as luvas parecerem limpas", "Não, luvas não substituem a higiene das mãos", "Somente em hospitais"], answer: 2, explanation: "As luvas podem ficar contaminadas e não substituem a higienização das mãos." },
  { q: "Por que algumas cepas de Acinetobacter baumannii preocupam os serviços de saúde?", options: ["Porque não são bactérias", "Porque podem apresentar resistência a vários antimicrobianos", "Porque são sempre inofensivas", "Porque são visíveis a olho nu"], answer: 1, explanation: "Algumas cepas podem apresentar resistência a múltiplos antimicrobianos, o que torna o controle de infecções importante." },
  { q: "Ao limpar uma superfície, qual prática é mais segura?", options: ["Misturar produtos para aumentar o efeito", "Ignorar as instruções do rótulo", "Usar qualquer produto em qualquer material", "Seguir o rótulo e o protocolo aplicável"], answer: 3, explanation: "O produto, a forma de uso e o tempo de contato devem seguir as instruções do fabricante e os protocolos aplicáveis." },
  { q: "Qual afirmação sobre biossegurança é correta?", options: ["É responsabilidade apenas da equipe de limpeza", "Só importa dentro de hospitais", "É uma prática coletiva que depende de medidas adequadas", "Não precisa de protocolos"], answer: 2, explanation: "Biossegurança envolve práticas responsáveis de diferentes pessoas e deve seguir orientações e protocolos adequados." },
  { q: "Quando as mãos estão visivelmente sujas, qual opção geralmente é indicada?", options: ["Apenas passar um pano seco", "Lavar com água e sabonete", "Colocar luvas por cima", "Usar perfume"], answer: 1, explanation: "Quando há sujeira visível, água e sabonete são indicados; siga também as orientações do serviço de saúde." },
  { q: "O que deve orientar a escolha dos equipamentos de proteção individual (EPIs)?", options: ["A cor do uniforme", "A preferência pessoal apenas", "Os riscos da atividade e o protocolo aplicável", "O equipamento mais barato, em qualquer caso"], answer: 2, explanation: "A escolha dos EPIs depende da avaliação de risco, da atividade e das orientações e protocolos aplicáveis." },
  { q: "Qual atitude é segura ao usar produtos de limpeza?", options: ["Misturar produtos diferentes", "Usar sem ler o rótulo", "Respeitar as instruções do fabricante", "Guardar em garrafas de bebidas"], answer: 2, explanation: "Leia e siga o rótulo, incluindo modo de uso, diluição, proteção necessária e armazenamento." },
  { q: "O que fazer se houver dúvida sobre um procedimento de biossegurança no estágio?", options: ["Improvisar", "Perguntar ao supervisor e consultar o protocolo local", "Ignorar a dúvida", "Copiar uma prática vista na internet sem verificar"], answer: 1, explanation: "Em ambientes de saúde, dúvidas devem ser esclarecidas com a equipe responsável e com os protocolos institucionais." },
  { q: "Qual frase descreve melhor a resistência antimicrobiana?", options: ["O corpo humano fica resistente à água", "Microrganismos podem deixar de responder a determinados medicamentos", "Todos os antibióticos funcionam contra todas as bactérias", "É causada somente por falta de higiene"], answer: 1, explanation: "A resistência ocorre quando microrganismos deixam de responder a medicamentos que antes podiam controlá-los." },
  { q: "Por que não se deve compartilhar informações identificáveis de pacientes em um fórum?", options: ["Porque mensagens devem ser sempre curtas", "Para proteger a privacidade e a confidencialidade", "Porque a internet não aceita textos longos", "Não existe motivo"], answer: 1, explanation: "A privacidade e a confidencialidade das pessoas devem ser protegidas; não publique dados identificáveis de pacientes." },
  { q: "Qual cuidado é importante ao retirar EPIs?", options: ["Retirar rapidamente sem cuidado", "Evitar tocar áreas potencialmente contaminadas e higienizar as mãos conforme protocolo", "Reutilizar tudo automaticamente", "Deixar os equipamentos em qualquer superfície"], answer: 1, explanation: "A retirada deve seguir técnica e protocolo adequados para reduzir o risco de contaminação." },
  { q: "Qual é uma forma de transmissão possível de Acinetobacter baumannii em serviços de saúde?", options: ["Contato com mãos, superfícies ou equipamentos contaminados", "Somente picada de mosquito", "Somente por alimentos doces", "Não pode ser transmitida"], answer: 0, explanation: "A transmissão pode ocorrer por contato com mãos, superfícies ou equipamentos contaminados, reforçando a importância das medidas de prevenção." },
  { q: "A limpeza e a desinfecção são exatamente a mesma coisa?", options: ["Sim, sempre", "Não; são processos diferentes, embora relacionados", "Sim, quando a superfície é branca", "Não existe diferença em nenhum contexto"], answer: 1, explanation: "Limpeza e desinfecção são processos diferentes. A escolha do procedimento depende da superfície, do risco e do protocolo." },
  { q: "Qual atitude ajuda a prevenir doenças transmitidas por alimentos?", options: ["Preparar alimentos com mãos sujas", "Usar água não tratada", "Higienizar as mãos e manipular alimentos com segurança", "Deixar alimentos perecíveis fora de refrigeração por tempo indefinido"], answer: 2, explanation: "Higiene das mãos, água segura e manipulação e conservação corretas dos alimentos ajudam a prevenir doenças." },
  { q: "O que significa seguir o tempo de contato indicado para um desinfetante?", options: ["Remover o produto imediatamente em todos os casos", "Manter o produto pelo período indicado no rótulo", "Deixar o produto para sempre", "Misturá-lo com outro produto"], answer: 1, explanation: "O tempo de contato faz parte das instruções de uso do produto e deve ser respeitado." },
  { q: "Qual afirmação sobre bactérias é correta?", options: ["Todas as bactérias causam doenças", "Nenhuma bactéria pode causar doenças", "Algumas são inofensivas ou úteis, e outras podem causar infecções", "Bactérias só existem em hospitais"], answer: 2, explanation: "Existem muitas espécies bacterianas; algumas fazem parte da microbiota ou do ambiente, enquanto outras podem causar doenças." },
  { q: "Qual deve ser a atitude ao identificar uma condição insegura em um serviço de saúde?", options: ["Esconder a situação", "Comunicar à equipe responsável conforme o procedimento local", "Publicar dados de pacientes nas redes sociais", "Continuar sem avaliar o risco"], answer: 1, explanation: "Condições inseguras devem ser comunicadas pelos canais apropriados, seguindo os procedimentos da instituição." },
  { q: "Por que os protocolos de biossegurança devem ser atualizados e seguidos?", options: ["Para substituir todo treinamento", "Para orientar práticas seguras com base em recomendações aplicáveis", "Para tornar o trabalho mais confuso", "Porque são opcionais em qualquer situação"], answer: 1, explanation: "Protocolos ajudam a padronizar práticas e devem ser seguidos junto com treinamento e orientações atualizadas." },
  { q: "Qual atitude é adequada ao estudar um caso clínico para uma apresentação acadêmica?", options: ["Expor nome e documentos do paciente", "Compartilhar imagens identificáveis sem autorização", "Usar informações devidamente anonimizadas e respeitar regras éticas", "Publicar prontuários completos"], answer: 2, explanation: "A privacidade deve ser preservada. Use informações anonimizadas e siga as regras éticas e institucionais." }
];

let questions = [];
function selectRandomQuestions(amount = 5) {
  const shuffled = [...questionBank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(amount, shuffled.length));
}

let questionIndex = 0, score = 0, selectedAnswer = null;
questions = selectRandomQuestions();

let questionEl = document.getElementById("quizQuestion");
let optionsEl = document.getElementById("quizOptions");
let feedbackEl = document.getElementById("quizFeedback");
let nextButton = document.getElementById("quizNext");
let countEl = document.getElementById("quizQuestionCount");
let progressEl = document.getElementById("quizProgress");
let hintEl = document.getElementById("quizHint");

function renderQuestion() {
  const question = questions[questionIndex];
  selectedAnswer = null;
  countEl.textContent = `PERGUNTA ${questionIndex + 1} DE ${questions.length}`;
  progressEl.style.width = `${(questionIndex + 1) / questions.length * 100}%`;
  questionEl.textContent = question.q;
  feedbackEl.textContent = "";
  hintEl.textContent = "Escolha uma resposta para continuar.";
  nextButton.disabled = true;
  nextButton.textContent = questionIndex === questions.length - 1 ? "Ver resultado →" : "Próxima pergunta →";
  optionsEl.innerHTML = "";
  
  question.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = option;
    button.addEventListener("click", () => chooseAnswer(i));
    optionsEl.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (selectedAnswer !== null) return;
  selectedAnswer = index;
  const question = questions[questionIndex];
  const buttons = [...optionsEl.querySelectorAll("button")];
  
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === question.answer) button.classList.add("correct");
    if (i === index && index !== question.answer) button.classList.add("wrong");
  });
  
  if (index === question.answer) { 
    score++; 
    feedbackEl.textContent = `Muito bem! ${question.explanation}`; 
  } else {
    feedbackEl.textContent = `Ainda não! ${question.explanation}`;
  }
  
  hintEl.textContent = "Resposta registrada.";
  nextButton.disabled = false;
}

function handleNextClick() {
  if (selectedAnswer === null) return;
  if (questionIndex < questions.length - 1) { 
    questionIndex++; 
    renderQuestion(); 
  } else { 
    showResult(); 
  }
}

function showResult() {
  const percent = Math.round(score / questions.length * 100);
  let title = percent >= 80 ? "Mandou muito bem!" : percent >= 60 ? "Bom trabalho!" : "Continue aprendendo!";
  let message = percent >= 80 ? "Você demonstrou um ótimo entendimento dos conceitos básicos de prevenção." : "Revise o guia e tente novamente. Cada aprendizado ajuda a fortalecer práticas seguras.";
  
  document.getElementById("quizPanel").innerHTML = `
    <div class="quiz-result">
      <span class="eyebrow">SEU RESULTADO</span>
      <div class="result-score">${score}/${questions.length}</div>
      <h3>${title}</h3>
      <p>${message}</p>
      <p><strong>${percent}% de acertos</strong></p>
      <button class="button button-primary" id="restartQuiz">Refazer quiz ↻</button>
    </div>
  `;
  
  document.getElementById("restartQuiz").addEventListener("click", () => {
    questionIndex = 0; 
    score = 0; 
    questions = selectRandomQuestions();
    
    document.getElementById("quizPanel").innerHTML = `
      <div class="quiz-progress-line"><span id="quizProgress"></span></div>
      <div class="quiz-meta"><span id="quizQuestionCount">PERGUNTA 1 DE 5</span><span class="quiz-tag">NÍVEL BÁSICO</span></div>
      <h3 id="quizQuestion"></h3>
      <div class="quiz-options" id="quizOptions"></div>
      <div class="quiz-feedback" id="quizFeedback" aria-live="polite"></div>
      <div class="quiz-controls"><span id="quizHint">Escolha uma resposta para continuar.</span><button class="button button-primary" id="quizNext" disabled>Próxima pergunta →</button></div>
    `;
    
    // Reatribui as referências dos elementos do DOM
    questionEl = document.getElementById("quizQuestion");
    optionsEl = document.getElementById("quizOptions");
    feedbackEl = document.getElementById("quizFeedback");
    nextButton = document.getElementById("quizNext");
    countEl = document.getElementById("quizQuestionCount");
    progressEl = document.getElementById("quizProgress");
    hintEl = document.getElementById("quizHint");
    
    // Adiciona o evento de clique corretamente apenas uma vez
    nextButton.addEventListener("click", handleNextClick);
    
    renderQuestion();
  });
}

// Inicializa o evento do botão "Próxima" na primeira carga
nextButton.addEventListener("click", handleNextClick);
renderQuestion();

const microbeInfo = {
  staph: ["Staphylococcus aureus", "É uma bactéria que pode estar presente na pele e nas narinas de pessoas saudáveis. Pode causar desde infecções de pele até infecções mais graves em certas circunstâncias. Higiene das mãos, cuidados com feridas e medidas de prevenção indicadas ajudam a reduzir riscos."],
  ecoli: ["Escherichia coli", "Muitas variedades fazem parte da microbiota intestinal, mas algumas podem causar doenças intestinais ou infecções em outros locais. Higienizar as mãos, manipular alimentos com segurança e usar água potável são medidas preventivas importantes."],
  pseudo: ["Pseudomonas aeruginosa", "É uma bactéria encontrada em diferentes ambientes e pode causar infecções oportunistas, especialmente em pessoas hospitalizadas ou com maior vulnerabilidade. A limpeza adequada, o manejo correto de equipamentos e os protocolos de prevenção são importantes."]
};

const dialog = document.getElementById("infoDialog");
document.querySelectorAll(".learn-more").forEach(button => button.addEventListener("click", () => {
  const info = microbeInfo[button.dataset.info];
  document.getElementById("dialogTitle").textContent = info[0];
  document.getElementById("dialogText").textContent = info[1];
  dialog.showModal();
}));

function closeDialog() { dialog.close(); }
document.getElementById("dialogClose").addEventListener("click", closeDialog);
document.getElementById("dialogOk").addEventListener("click", closeDialog);
dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(); });

const forumForm = document.getElementById("forumForm");
const forumPosts = document.getElementById("forumPosts");
const forumMessage = document.getElementById("forumMessage");
const STORAGE_KEY = "bioseguro_posts_v1";

function loadPosts() {
  try {
    const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    posts.slice().reverse().forEach(post => addPost(post.name, post.text, false));
  } catch (error) { /* O mural continua funcionando mesmo se o armazenamento estiver indisponível. */ }
}

function addPost(name, text, save = true) {
  const article = document.createElement("article"); article.className = "forum-post";
  const avatar = document.createElement("span"); avatar.className = "post-avatar avatar-teal";
  avatar.textContent = name.trim().split(/\s+/).slice(0, 2).map(part => part[0].toUpperCase()).join("");
  const body = document.createElement("div");
  const meta = document.createElement("div"); meta.className = "post-meta";
  const author = document.createElement("strong"); author.textContent = name;
  const label = document.createElement("span"); label.textContent = "Publicação local";
  meta.append(author, label);
  const paragraph = document.createElement("p"); paragraph.textContent = text;
  const reaction = document.createElement("div"); reaction.className = "post-reaction"; reaction.textContent = "♡ ";
  const reactionText = document.createElement("span"); reactionText.textContent = "Mural educativo"; reaction.appendChild(reactionText);
  body.append(meta, paragraph, reaction); article.append(avatar, body); forumPosts.prepend(article);
  if (save) {
    try {
      const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      posts.push({name, text, date: Date.now()});
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts.slice(-20)));
    } catch (error) { forumMessage.textContent = "Publicação adicionada à página, mas não foi possível salvá-la neste navegador."; }
  }
}

forumForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("postName").value.trim();
  const text = document.getElementById("postText").value.trim();
  if (!name || !text) { forumMessage.textContent = "Preencha seu nome ou apelido e a mensagem."; return; }
  addPost(name, text);
  forumForm.reset();
  forumMessage.textContent = "Publicação adicionada! Ela fica disponível neste navegador.";
});
loadPosts();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.textContent = "☰";
}));