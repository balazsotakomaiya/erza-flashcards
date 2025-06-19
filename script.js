// Medical Flashcards Data - Hip Conditions
const flashcardsData = [
    {
        question: "What is Luxatio coxa congenital?",
        answer: `<h3>Luxatio coxa congenital (Congenital Hip Dislocation)</h3>
        <ul>
            <li>Multifactor inheritance (multiple genes involved)</li>
            <li>More frequent with girls</li>
            <li>External factors may influence (intrauterine space disproportion)</li>
            <li>Relaxin hormone involvement</li>
            <li>Swaddling, wrapping - not good for acetabulum development</li>
        </ul>
        <p><strong>Note:</strong> Can be secondary in cases of infantil cerebral paresis, myelodysplasia (ICP)</p>`
    },
    {
        question: "What are the clinical findings in congenital hip dislocation?",
        answer: `<h3>Clinical Findings</h3>
        <ul>
            <li>Loose hip joint</li>
            <li>Unstable hip, which can easily dislocate/relocate</li>
        </ul>`
    },
    {
        question: "What is the Lorenz ABD maneuver?",
        answer: `<h3>Lorenz ABD (Abduction, Flexion, External Rotation)</h3>
        <p>A diagnostic and therapeutic maneuver for hip dislocation:</p>
        <ul>
            <li>In relaxed position, the femoral head is dislocated</li>
            <li>"Click" reposition happens with Lorenz ABD</li>
            <li>Dislocates again on adduction</li>
        </ul>`
    },
    {
        question: "What are the conservative treatment options for congenital hip dislocation?",
        answer: `<h3>Conservative Treatment</h3>
        <ul>
            <li><strong>Pavlik strap:</strong> PT show the movement, 20x every diaper change</li>
            <li><strong>Goal:</strong> Loosen fascia</li>
            <li><strong>Ultrasound monitoring</strong></li>
            <li><strong>Hyase iontophoresis</strong></li>
            <li><strong>Active movements</strong> of the hands and fingers</li>
            <li><strong>Stretch fascia</strong></li>
        </ul>`
    },
    {
        question: "When is surgical treatment indicated for congenital hip dislocation?",
        answer: `<h3>Surgical Treatment Indications</h3>
        <ul>
            <li><strong>Open reposition</strong> under age of 1, before gait development</li>
            <li><strong>4-6 weeks plaster-cast</strong> in order to shrink the capsule</li>
            <li><strong>After cast off:</strong> active and passive physiotherapy</li>
        </ul>`
    },
    {
        question: "What is the main goal of treatment for congenital hip dislocation?",
        answer: `<h3>Treatment Goal</h3>
        <p><strong>GOAL: Develop pelvic stability</strong></p>
        <ul>
            <li><strong>Frontal plane:</strong> Glut. med. adductors</li>
            <li><strong>Sagittal plane:</strong> Glut. max. hip flexors, abdominals</li>
        </ul>`
    },
    {
        question: "What factors influence the inheritance of congenital hip dislocation?",
        answer: `<h3>Inheritance Factors</h3>
        <ul>
            <li><strong>Multifactor inheritance</strong> - multiple genes involved</li>
            <li><strong>More frequent with girls</strong></li>
            <li><strong>External factors</strong> may influence condition</li>
            <li><strong>Intrauterine space disproportion</strong> can be a contributing factor</li>
            <li><strong>Relaxin hormone</strong> plays a role</li>
        </ul>`
    },
    {
        question: "What developmental factors should be avoided in newborns with hip dysplasia risk?",
        answer: `<h3>Developmental Considerations</h3>
        <ul>
            <li><strong>Swaddling and tight wrapping</strong> should be avoided</li>
            <li>These practices are <strong>not good for acetabulum development</strong></li>
            <li>Proper positioning allows for normal hip development</li>
            <li>Early detection and intervention are crucial</li>
        </ul>`
    },
    {
        question: "What is Dysplasia Coxae?",
        answer: `<h3>Dysplasia Coxae</h3>
        <p><strong>Definition:</strong> Not well developed bone (mainly acetabulum)</p>
        <ul>
            <li><strong>No dislocation yet</strong> - femoral head is located not centrally in the acetabulum</li>
            <li><strong>Subluxation easier</strong></li>
            <li><strong>Socket of joint</strong> is very steep (over 45°) and shallow</li>
        </ul>`
    },
    {
        question: "How is Dysplasia Coxae diagnosed?",
        answer: `<h3>Diagnosis of Dysplasia Coxae</h3>
        <ul>
            <li><strong>Importance of early screening</strong> and prevention by Abd. swaddle</li>
            <li><strong>Pavlik strap</strong> (keeps in lorenz abd: Abd, flex, ext, rot)</li>
            <li><strong>Physical examination</strong> by doctor</li>
            <li><strong>Ultrasound</strong></li>
            <li><strong>X-ray at the age of 4 months</strong></li>
        </ul>`
    },
    {
        question: "What are the surgical treatment options for Dysplasia Coxae?",
        answer: `<h3>Surgical Treatment: Pelvic Osteotomy</h3>
        <p><strong>Types:</strong> Salter, Pemberton, Chiari</p>
        <p><strong>Goal:</strong> Fix steepness and deepness</p>
        
        <h4>Chiari Osteotomy:</h4>
        <ul>
            <li>In early adult age</li>
            <li>No plaster cast anymore</li>
            <li>Inner fixation by screw or wire</li>
            <li>Not loadable, not stable for every movement - add int.rot</li>
        </ul>`
    },
    {
        question: "What is Tendovaginitis crepitans?",
        answer: `<h3>Tendovaginitis crepitans</h3>
        <p><strong>Definition:</strong> Inflammation of tendon sheath (extensors or flexors of the forearm)</p>`
    },
    {
        question: "What is the conservative treatment for Tendovaginitis crepitans?",
        answer: `<h3>Conservative Treatment - Tendovaginitis</h3>
        
        <h4>Acute phase:</h4>
        <ul>
            <li>Rest, fixation (if needed)</li>
            <li>Painkiller, anti-inflammatory</li>
        </ul>
        
        <h4>Chronic phase:</h4>
        <ul>
            <li>Painkiller</li>
            <li>Maintain function of wrist and hand</li>
            <li>Grip power gradually, without overloading</li>
            <li>Manual skills</li>
            <li>Eccentric exercises</li>
        </ul>`
    },
    {
        question: "What is the surgical treatment for Tendovaginitis crepitans?",
        answer: `<h3>Surgical Treatment - Tendovaginitis</h3>
        <ul>
            <li><strong>Procedure:</strong> Cut in the concerned tendon sheath</li>
            <li><strong>Anesthesia:</strong> Done in local anesthesia</li>
            <li><strong>No fixation needed</strong></li>
            <li><strong>Early mobilization:</strong> Gradual functional movements from 1st day</li>
            <li><strong>Goal:</strong> Recover full function and grip</li>
            <li><strong>Develop manual skills</strong></li>
        </ul>`
    },
    {
        question: "What is De Quervain Syndrome?",
        answer: `<h3>De Quervain Syndrome</h3>
        <p><strong>Definition:</strong> Inflammation of m. abductor pollicis longus and extensor pollicis brevis, common tendon sheath (tenosinovitis)</p>
        
        <h4>Symptoms:</h4>
        <ul>
            <li>Pain</li>
            <li>Swelling</li>
            <li>Pain on pressure</li>
            <li><strong>Finkelstein test positive</strong></li>
        </ul>
        
        <p><strong>Treatment:</strong> As tendovaginitis</p>`
    },
    {
        question: "What is Shoulder Arthrosis and how common is it?",
        answer: `<h3>Shoulder Arthrosis</h3>
        <p><strong>Frequency:</strong> Rather rare</p>
        <p><strong>Definition:</strong> Degenerative change in the joint - cartilage</p>
        <p><strong>Types:</strong> Primary/secondary (habitual dislocation, rot cuff)</p>
        
        <h4>Symptoms:</h4>
        <ul>
            <li>Pain (4 stages)</li>
            <li>Movement restriction</li>
            <li>Crepitation</li>
            <li>X-ray findings</li>
        </ul>`
    },
    {
        question: "What is the conservative treatment for Shoulder Arthrosis?",
        answer: `<h3>Conservative Treatment - Shoulder Arthrosis</h3>
        <ul>
            <li><strong>Avoid overloading</strong> the joint</li>
            <li><strong>Avoid lasting rest</strong> of joint</li>
            <li><strong>Medication</strong></li>
            <li><strong>Underwater PT</strong></li>
            <li><strong>Treat contracture - OMT, stretch</strong> (ext.rot, abd, flex, int.rot)</li>
            <li><strong>Active movements, strengthening</strong></li>
        </ul>`
    },
    {
        question: "What is the surgical treatment for Shoulder Arthrosis?",
        answer: `<h3>Surgical Treatment - Shoulder Arthrosis</h3>
        <ul>
            <li><strong>Goal:</strong> Decrease pain, increase function</li>
            <li><strong>Procedure:</strong> Arthro-plastic surgery (hemi or total)</li>
            <li><strong>Recovery:</strong> Long rehab process</li>
        </ul>`
    },
    {
        question: "What are the main congenital conditions of the Elbow and Hand?",
        answer: `<h3>Elbow and Hand Congenital Conditions</h3>
        <ol>
            <li><strong>Luxatio Capiti Radii Congenita</strong> (luxation of radial head)</li>
            <li><strong>Madelung deformity</strong> (varus elbow)</li>
            <li><strong>Hand: Syndactilia, Polydactilia</strong> (4 or 6 fingers)</li>
            <li><strong>Hand varus deformity</strong></li>
        </ol>`
    },
    {
        question: "What is the general conservative treatment approach for Elbow and Hand conditions?",
        answer: `<h3>Conservative Treatment - Elbow and Hand (General)</h3>
        <ul>
            <li><strong>Prevent and treat contracture</strong></li>
            <li><strong>Prevent movement restriction</strong></li>
            <li><strong>Increase ROM, develop good functions</strong></li>
            <li><strong>If necessary: fixation</strong></li>
        </ul>`
    },
    {
        question: "What is the general surgical treatment approach for Elbow and Hand conditions?",
        answer: `<h3>Surgical Treatment - Elbow and Hand (General)</h3>
        <ul>
            <li><strong>Early mobilization:</strong> passive, guided active, active</li>
            <li><strong>Prevent and treat contracture</strong></li>
            <li><strong>Prevent deep scarring</strong></li>
            <li><strong>Strengthening</strong></li>
            <li><strong>Help manual skills</strong></li>
            <li><strong>If necessary: fixation</strong></li>
        </ul>`
    },
    {
        question: "What is Epicondilitis humeri (lateral/medial)?",
        answer: `<h3>Epicondilitis humeri lat./med.</h3>
        <p><strong>Causes:</strong> Overloading of extensors/flexors (tennis, golf)</p>
        <p><strong>Pathology:</strong> Periostitis at origin of tendons</p>
        <p><strong>Symptoms:</strong> Painful, sensitive on pressure</p>`
    },
    {
        question: "What are the examination findings in Epicondilitis?",
        answer: `<h3>Examination Findings - Epicondilitis</h3>
        <ul>
            <li><strong>Overloading in anamnesis</strong></li>
            <li><strong>Active movements painful</strong></li>
            <li><strong>Resisted movement painful</strong></li>
            <li><strong>Pain on pressure</strong></li>
            <li><strong>Pain on passive stretch</strong></li>
        </ul>`
    },
    {
        question: "What is the conservative treatment approach for acute phase injuries?",
        answer: `<h3>Conservative Treatment - Acute Phase</h3>
        <ul>
            <li><strong>Rest, fixation (short time)</strong></li>
            <li><strong>Avoid loading</strong></li>
            <li><strong>Ice</strong></li>
            <li><strong>Anti-inflammatory</strong></li>
        </ul>`
    },
    {
        question: "What is the conservative treatment approach for subacute/chronic phase injuries?",
        answer: `<h3>Conservative Treatment - Subacute, Chronic Phase</h3>
        <ul>
            <li><strong>Electrotherapy, UH</strong></li>
            <li><strong>Deep friction massage</strong></li>
            <li><strong>Gradual loading to remodel tissue</strong></li>
            <li><strong>Progressive loading:</strong> isometric, active with weight, resisted w/ theraband, eccentric loading</li>
            <li><strong>Prevent contracture</strong></li>
        </ul>`
    },
    {
        question: "What is the post-surgical treatment approach for hand/wrist conditions?",
        answer: `<h3>Post-Surgical Treatment - Hand/Wrist</h3>
        <ul>
            <li><strong>3-4 weeks fixation</strong></li>
            <li><strong>Passive - active movements</strong></li>
            <li><strong>Increase ROM, prevent contracture</strong></li>
            <li><strong>Increase grip power</strong></li>
            <li><strong>Every day life functions</strong></li>
        </ul>`
    }
];

// Application state
let currentCardIndex = 0;
let studiedCards = new Set();
let isFlipped = false;

// DOM elements
const flashcard = document.getElementById('flashcard');
const cardQuestion = document.getElementById('cardQuestion');
const cardAnswer = document.getElementById('cardAnswer');
const currentCardSpan = document.getElementById('currentCard');
const totalCardsSpan = document.getElementById('totalCards');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const studiedCountSpan = document.getElementById('studiedCount');
const accuracySpan = document.getElementById('accuracy');

// Initialize the application
function init() {
    totalCardsSpan.textContent = flashcardsData.length;
    loadCard();
    updateProgress();
    updateStats();
    
    // Add event listeners
    flashcard.addEventListener('click', flipCard);
    prevBtn.addEventListener('click', previousCard);
    nextBtn.addEventListener('click', nextCard);
    shuffleBtn.addEventListener('click', shuffleCards);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);
}

// Load current card
function loadCard() {
    const card = flashcardsData[currentCardIndex];
    cardQuestion.textContent = card.question;
    cardAnswer.innerHTML = card.answer;
    
    currentCardSpan.textContent = currentCardIndex + 1;
    
    // Reset flip state
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
    
    // Update button states
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
    
    // Mark card as studied
    studiedCards.add(currentCardIndex);
    updateStats();
}

// Flip card animation
function flipCard() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
    
    // Add a subtle haptic feedback effect
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Navigation functions
function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        loadCard();
        updateProgress();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        loadCard();
        updateProgress();
    }
}

// Shuffle cards
function shuffleCards() {
    // Fisher-Yates shuffle algorithm
    for (let i = flashcardsData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardsData[i], flashcardsData[j]] = [flashcardsData[j], flashcardsData[i]];
    }
    
    // Reset to first card after shuffle
    currentCardIndex = 0;
    studiedCards.clear();
    loadCard();
    updateProgress();
    updateStats();
    
    // Visual feedback
    shuffleBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        shuffleBtn.style.transform = 'rotate(0deg)';
    }, 600);
}

// Update progress bar
function updateProgress() {
    const progress = ((currentCardIndex + 1) / flashcardsData.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Update statistics
function updateStats() {
    studiedCountSpan.textContent = studiedCards.size;
    const accuracy = Math.round((studiedCards.size / flashcardsData.length) * 100);
    accuracySpan.textContent = `${accuracy}%`;
}

// Keyboard navigation
function handleKeydown(event) {
    switch(event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            previousCard();
            break;
        case 'ArrowRight':
            event.preventDefault();
            nextCard();
            break;
        case ' ':
        case 'Enter':
            event.preventDefault();
            flipCard();
            break;
        case 's':
        case 'S':
            event.preventDefault();
            shuffleCards();
            break;
    }
}

// Auto-save progress to localStorage
function saveProgress() {
    const progress = {
        currentCardIndex,
        studiedCards: Array.from(studiedCards),
        timestamp: Date.now()
    };
    localStorage.setItem('medicalFlashcardsProgress', JSON.stringify(progress));
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('medicalFlashcardsProgress');
    if (saved) {
        try {
            const progress = JSON.parse(saved);
            // Only load if it's from today (24 hour window)
            const dayAgo = Date.now() - (24 * 60 * 60 * 1000);
            if (progress.timestamp > dayAgo) {
                currentCardIndex = progress.currentCardIndex || 0;
                studiedCards = new Set(progress.studiedCards || []);
            }
        } catch (e) {
            console.log('Could not load progress:', e);
        }
    }
}

// Save progress periodically
setInterval(saveProgress, 30000); // Save every 30 seconds

// Save progress when leaving the page
window.addEventListener('beforeunload', saveProgress);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    init();
});

// Add some visual enhancements
function addVisualEffects() {
    // Add particle effect when flipping cards
    flashcard.addEventListener('transitionend', function() {
        if (isFlipped) {
            // Create a subtle pulse effect
            this.style.animation = 'pulse 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        }
    });
}

// Call visual effects setup
addVisualEffects();

// CSS for pulse animation (added via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style); 