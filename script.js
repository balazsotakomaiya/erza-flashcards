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
    },
    {
        question: "What is the subacromial space and its significance?",
        answer: `<h3>Subacromial Space</h3>
        <p><strong>Anatomy:</strong> 60-120° subacromial space = smallest</p>
        <p><strong>Significance:</strong> Critical area where impingement occurs during shoulder movement, particularly in the painful arc range.</p>`
    },
    {
        question: "What is the conservative treatment for shoulder impingement (inflammatory phase)?",
        answer: `<h3>Conservative Treatment - Shoulder Impingement (Inflammatory Phase)</h3>
        <ul>
            <li><strong>Anti-inflammatory, pain killers</strong></li>
            <li><strong>Electrotherapy</strong></li>
            <li><strong>Centralize humerus head</strong> by strengthening rotator cuff</li>
            <li><strong>Active movements</strong> to maintain ROM</li>
            <li><strong>Stretch contracture</strong></li>
            <li><strong>Underwater PT</strong> (makes it easier, then use water resistance)</li>
            <li><strong>Postural correction</strong></li>
            <li><strong>Traction in neutral - interior traction</strong></li>
        </ul>`
    },
    {
        question: "What is the surgical treatment approach for rotator cuff tears?",
        answer: `<h3>Surgical Treatment - Rotator Cuff</h3>
        <p><strong>Indication:</strong> If rotator cuff is torn</p>
        <p><strong>Post-op approach:</strong> Early functional treatment without fixation</p>
        <p><strong>Contraindicated:</strong> Overload the stitches - isometric and not overstretch</p>`
    },
    {
        question: "What is the detailed post-operative treatment protocol for shoulder surgery (Day 1)?",
        answer: `<h3>Post-Op Treatment - Day 1</h3>
        <ul>
            <li><strong>Early mobilization with bandage on</strong></li>
            <li><strong>Breathing, vascular training</strong></li>
            <li><strong>Walking on first day</strong></li>
            <li><strong>Move free joints, maintain functions</strong></li>
            <li><strong>Help circulation of upper extremity</strong></li>
            <li><strong>Dismiss with Desault bandage (for about 4 weeks)</strong></li>
            <li><strong>Soft tissue healing takes 6 weeks</strong></li>
        </ul>
        <p><strong>Contraindicated:</strong> Extension, Abduction, External rotation</p>`
    },
    {
        question: "What is the post-operative treatment protocol for shoulder surgery (4-6 weeks)?",
        answer: `<h3>Post-Op Treatment - After 4-6 weeks</h3>
        <ul>
            <li><strong>Gradual CPM + guided active, active shoulder + shoulder complex movements</strong></li>
            <li><strong>Active:</strong> flexion, abd and back to neutral</li>
            <li><strong>Elbow and hand movements</strong></li>
            <li><strong>Increase grip strength</strong></li>
            <li><strong>Self hygiene function with limited use</strong></li>
        </ul>`
    },
    {
        question: "What is the post-operative treatment protocol for shoulder surgery (After 6 weeks)?",
        answer: `<h3>Post-Op Treatment - After 6 weeks</h3>
        <ul>
            <li><strong>Treat shoulder complex</strong></li>
            <li><strong>Active/passive:</strong> movements of glenohumeral joint to all directions</li>
            <li><strong>Strengthening</strong></li>
            <li><strong>Stretching</strong></li>
            <li><strong>Proprioception</strong></li>
            <li><strong>Postural correction</strong></li>
            <li><strong>Self management in everyday life</strong></li>
        </ul>`
    },
    {
        question: "What are the contraindicated movements for posterior shoulder dislocation surgery?",
        answer: `<h3>Surgical Treatment - Posterior Luxation</h3>
        <p><strong>Concept:</strong> Similar to anterior, post-op similar</p>
        <p><strong>Except contraindicated movements for 4-6 weeks:</strong></p>
        <ul>
            <li><strong>Int rot</strong></li>
            <li><strong>Horizontal add</strong></li>
            <li><strong>Extension with add</strong></li>
        </ul>
        
        <h4>Contraindicated for 4-6 weeks (anterior dislocation):</h4>
        <ul>
            <li><strong>Ext rot, extension over neutral, big horizontal abd</strong> (would slide anterior)</li>
            <li><strong>Int rot against resistance</strong> (tendon has to heal)</li>
        </ul>`
    },
    {
        question: "What are the additional considerations for shoulder rehabilitation?",
        answer: `<h3>Additional Shoulder Rehabilitation</h3>
        <ul>
            <li><strong>PNF:</strong> Shoulder complex patterns</li>
            <li><strong>Mobilise thoraces:</strong> to increase breathing function</li>
            <li><strong>Postural correction</strong></li>
        </ul>`
    },
    {
        question: "What is the surgical approach for bony bridge development in shoulder conditions?",
        answer: `<h3>Surgical Treatment - Bony Bridge Development</h3>
        <p><strong>If bony bridge developed:</strong> Remove it to free scapula movements</p>
        <ul>
            <li><strong>Desault bandage:</strong> 2-3 weeks int rot, 40° elbow flexion</li>
            <li><strong>Wrist, hand must be moved</strong></li>
            <li><strong>After bandage off:</strong> Passive, guided active, active movements of shoulder complex</li>
            <li><strong>Strengthen muscles around scapula</strong></li>
            <li><strong>Recover muscle balance</strong></li>
            <li><strong>Correction of shoulder position and make awareness of it</strong></li>
            <li><strong>Trunk muscle strengthening</strong></li>
            <li><strong>Postural correction</strong></li>
        </ul>`
    },
    {
        question: "What is Luxatio Habitualis Humeri?",
        answer: `<h3>Luxatio Habitualis Humeri</h3>
        <p><strong>Definition:</strong> Humerus head dislocates on certain movements (most often abd, ext rot, ext)</p>
        <ul>
            <li><strong>Anterior luxation (anterior + inferior)</strong> - most common</li>
            <li><strong>Posterior luxation (posterior + inferior)</strong></li>
        </ul>`
    },
    {
        question: "What is the surgical treatment for anterior luxation (Luxatio Habitualis Humeri)?",
        answer: `<h3>Surgical Treatment - Anterior Luxation</h3>
        <p><strong>Putti-Platt operation:</strong> Double anterior capsule + put subscapularis tendon more lateral</p>
        <p><strong>Goal:</strong> Make stronger</p>
        <p><strong>Result:</strong> This creates an int.rot position</p>`
    },
    {
        question: "What is Scapula elevata (Sprengel deformity)?",
        answer: `<h3>Scapula elevata (Sprengel deformity)</h3>
        <p><strong>Type:</strong> Congenital</p>
        <ul>
            <li><strong>Developmental disorder</strong></li>
            <li><strong>Scapula lies higher</strong></li>
            <li><strong>In serious cases:</strong> bony bridge between medial margin and cervical vertebrae</li>
        </ul>`
    },
    {
        question: "What are the clinical findings in Scapula elevata?",
        answer: `<h3>Scapula elevata - Clinical Findings</h3>
        
        <h4>Inspection:</h4>
        <ul>
            <li><strong>Postural differences:</strong> Trunk-arm triangle, shoulder height</li>
            <li><strong>Shoulder peak anterior position</strong></li>
            <li><strong>Shoulder in protract, elevation</strong></li>
        </ul>
        
        <h4>Movement examination:</h4>
        <ul>
            <li><strong>Restricted movements in glenohumeral joint</strong></li>
        </ul>`
    },
    {
        question: "What is the conservative treatment for Scapula elevata (no bony bridge)?",
        answer: `<h3>Conservative Treatment - Scapula elevata (If no bony bridge)</h3>
        <ul>
            <li><strong>Active/passive:</strong> depression, retraction of shoulder complex</li>
            <li><strong>Relax and stretch elevating muscles:</strong> trapezius superior, levator (pecs, upper abd)</li>
            <li><strong>Strengthen depressor:</strong> Trapezius inferior, deep abdominals</li>
        </ul>`
    },
    {
        question: "What are the physical therapy goals for Scapula elevata?",
        answer: `<h3>Physical Therapy Goals - Scapula elevata</h3>
        <ul>
            <li><strong>Goal:</strong> Recover from muscle disbalance</li>
            <li><strong>Strengthen:</strong> Plantar flexors, tibialis posterior, peroneus longus</li>
            <li><strong>Correct structure of LE</strong></li>
            <li><strong>Teach correction of pelvis/lumbar spine</strong></li>
            <li><strong>Postural correction in:</strong> standing, walking</li>
        </ul>`
    },
    {
        question: "What is Hallux Valgus?",
        answer: `<h3>Hallux Valgus</h3>
        <ul>
            <li><strong>Hallux deformity of static origin</strong></li>
            <li><strong>Transverse arch flattens</strong></li>
            <li><strong>1 MTP becomes more prominent and valgus positioned</strong></li>
            <li><strong>Hallux pronation</strong></li>
            <li><strong>Inflammation and exostosis at head of 1 MT</strong></li>
            <li><strong>Difficulty in shoe wearing (extra calcification)</strong></li>
        </ul>`
    },
    {
        question: "What is the treatment approach for Hallux Valgus?",
        answer: `<h3>Hallux Valgus Treatment</h3>
        
        <h4>Simple case:</h4>
        <p><strong>Adequate support and shoes</strong> (support on transverse arch)</p>
        
        <h4>Surgical treatment:</h4>
        <p><strong>Schede, Keller-Brandes operation</strong></p>
        
        <h4>Post-op (2-3 days):</h4>
        <ul>
            <li><strong>Bed rest, breathing, vascular training</strong></li>
            <li><strong>Standing and walking in open slippers</strong> w/out loading forefoot</li>
            <li><strong>Passive movements of hallux</strong> (flex-ext) regularly</li>
            <li><strong>Later whole foot movements, support</strong></li>
        </ul>`
    },
    {
        question: "What is Digitus Malleus (Hammer toe)?",
        answer: `<h3>Digitus Malleus (Hammer toe)</h3>
        <ul>
            <li><strong>Deformity of static origin</strong></li>
            <li><strong>2-5 toes</strong></li>
            <li><strong>PIP in flexion, MTP and DIP in extension</strong></li>
            <li><strong>Symptoms:</strong> Pressure over PIP (by shoes)</li>
            <li><strong>Difficulty in shoe wearing</strong></li>
        </ul>`
    },
    {
        question: "What is the treatment protocol for Digitus Malleus?",
        answer: `<h3>Digitus Malleus Treatment</h3>
        
        <h4>Initially:</h4>
        <p><strong>Support transverse arch</strong> (MBT: Rolling surface shoe)</p>
        
        <h4>Surgical treatment Post-op:</h4>
        <ul>
            <li><strong>1-2 days bed rest</strong></li>
            <li><strong>Breathing, vascular training</strong></li>
            <li><strong>Open slippers without loading forefoot</strong></li>
            <li><strong>Later whole foot movements</strong></li>
            <li><strong>Support transverse arch</strong></li>
        </ul>`
    },
    {
        question: "What is Dupuytren Contracture?",
        answer: `<h3>Dupuytren Contracture</h3>
        <ul>
            <li><strong>Contracture of palmaris aponeurosis</strong></li>
            <li><strong>Most common in middle aged men</strong></li>
            <li><strong>Progressively worsening</strong> (conservative treatment?)</li>
            <li><strong>Causes severe functional limitations</strong></li>
        </ul>
        <p><strong>Treatment:</strong> As before</p>`
    },
    {
        question: "What is Rotator Cuff Impingement Syndrome?",
        answer: `<h3>Rotator Cuff Impingement Syndrome</h3>
        <p><strong>Most common:</strong> m. supraspinatus Impingement Syndrome</p>
        
        <h4>Symptoms:</h4>
        <ul>
            <li><strong>Pain (on movements, at night)</strong> - Local</li>
            <li><strong>Pain on pressure</strong></li>
            <li><strong>Abd, flex is painful</strong></li>
            <li><strong>Abd, flex, ROM limited</strong></li>
            <li><strong>Painful arc</strong></li>
        </ul>`
    },
    {
        question: "What is the detailed post-operative protocol for rotator cuff surgery (0-3 weeks)?",
        answer: `<h3>Rotator Cuff Surgery - Post-op (0-3 weeks)</h3>
        <ul>
            <li><strong>Bandage for a while, then free hanging</strong></li>
            <li><strong>Elbow movements</strong></li>
            <li><strong>Passive and active shoulder complex movements (for home!)</strong></li>
            <li><strong>Pendulum movements</strong></li>
            <li><strong>Isometric strengthening</strong></li>
            <li><strong>Use in every day life close to the body</strong></li>
        </ul>`
    },
    {
        question: "What is the post-operative protocol for rotator cuff surgery (3-6 weeks)?",
        answer: `<h3>Rotator Cuff Surgery - Post-op (3-6 weeks)</h3>
        <ul>
            <li><strong>Passive treatment by CPM</strong> = Continuous passive movement (machine)</li>
            <li><strong>Active shoulder complex movements</strong></li>
            <li><strong>Gradual glenohumeral movements</strong></li>
            <li><strong>Isometric, isotonic strengthening</strong></li>
            <li><strong>Use of tools</strong></li>
        </ul>`
    },
    {
        question: "What is the post-operative protocol for rotator cuff surgery (After 6 weeks)?",
        answer: `<h3>Rotator Cuff Surgery - Post-op (After 6 weeks)</h3>
        <ul>
            <li><strong>More active arm movements</strong></li>
            <li><strong>Rotation movements</strong></li>
            <li><strong>Individual and complex muscle strengthening</strong></li>
            <li><strong>Proprioception</strong></li>
        </ul>`
    },
    {
        question: "What is the long-term goal for rotator cuff surgery recovery?",
        answer: `<h3>Rotator Cuff Surgery - Long-term Goals</h3>
        <p><strong>At 3 months:</strong></p>
        <ul>
            <li><strong>Should be full ROM, full active movements (to individual needs)</strong></li>
            <li><strong>Increased physical activity</strong></li>
        </ul>`
    },
    {
        question: "What is Gonarthrosis?",
        answer: `<h3>Gonarthrosis</h3>
        <ul>
            <li><strong>Joint surface gets destroyed</strong></li>
            <li><strong>Pain and decrease ROM</strong></li>
            <li><strong>Often with deformity</strong></li>
            <li><strong>Primary or secondary</strong></li>
        </ul>`
    },
    {
        question: "What can cause secondary Gonarthrosis?",
        answer: `<h3>Secondary Gonarthrosis - Causes</h3>
        <ul>
            <li><strong>Hip or foot deformity</strong></li>
            <li><strong>Over-loading, overweight</strong></li>
            <li><strong>Post-trauma</strong></li>
            <li><strong>Inflammatory disease (RA)</strong></li>
            <li><strong>Bone nutrition problems</strong></li>
        </ul>`
    },
    {
        question: "What are the clinical findings in Gonarthrosis?",
        answer: `<h3>Gonarthrosis - Clinical Findings</h3>
        <ul>
            <li><strong>Pain (4 stages)</strong></li>
            <li><strong>Crepitation</strong></li>
            <li><strong>Decreased ROM in capsular pattern</strong></li>
            <li><strong>Weakening, quadriceps atrophy</strong></li>
            <li><strong>Deformity caused by ligament insufficiency</strong></li>
        </ul>`
    },
    {
        question: "What is the conservative treatment approach for Gonarthrosis?",
        answer: `<h3>Conservative Treatment - Gonarthrosis (Preventive)</h3>
        <ul>
            <li><strong>Extension treatment to prevent flexion contracture</strong></li>
            <li><strong>Pain relief (electrotherapy)</strong></li>
            <li><strong>OMT - Traction, Traction + slide</strong></li>
            <li><strong>Unloaded exercises</strong></li>
            <li><strong>Underwater PT</strong></li>
            <li><strong>Ergonomic advices, walking with aids</strong></li>
        </ul>`
    },
    {
        question: "What are the surgical treatment options for Gonarthrosis?",
        answer: `<h3>Surgical Treatment - Gonarthrosis</h3>
        <p><strong>Depends on which part of joint is concerned:</strong></p>
        <ul>
            <li><strong>Unicondylar surface replacement</strong> (medial or lateral arthrosis)</li>
            <li><strong>Bicondylar surface replacement (TEP</strong> - both femur and tibial surfaces)</li>
            <li><strong>4 weeks unloaded!!</strong></li>
        </ul>`
    },
    {
        question: "What is the detailed postoperative treatment for Gonarthrosis surgery (1-2 days)?",
        answer: `<h3>Gonarthrosis Surgery - Postoperative (1-2 days)</h3>
        <ul>
            <li><strong>Bedrest, breathing and vascular training, CPM</strong></li>
        </ul>`
    },
    {
        question: "What is the postoperative treatment for Gonarthrosis surgery (2-5 days)?",
        answer: `<h3>Gonarthrosis Surgery - Postoperative (2-5 days)</h3>
        <ul>
            <li><strong>Drain off, CPM, Walking with 4 leg frame, unloading</strong></li>
            <li><strong>Guided active movements: Knee, Hip, Ankle (unloaded)</strong></li>
            <li><strong>Strengthening muscles around the knee, but also hip and ankle</strong></li>
            <li><strong>Increase possible extension</strong> (support under heel in supine lying)</li>
            <li><strong>Walking with two crutches</strong></li>
            <li><strong>Underwater PT</strong></li>
        </ul>`
    },
    {
        question: "What is the goal for Gonarthrosis surgery recovery?",
        answer: `<h3>Gonarthrosis Surgery - Recovery Goals</h3>
        <p><strong>Reach: 0° extension, 90° flexion in 4 weeks</strong></p>`
    },
    {
        question: "What are the ergonomical advices for Gonarthrosis patients?",
        answer: `<h3>Ergonomical Advices - Gonarthrosis</h3>
        <ul>
            <li><strong>Lift on toilet seat (less flexion)</strong></li>
            <li><strong>Socks, stockings helping hand</strong></li>
            <li><strong>Seat in bathtub (less flexion)</strong></li>
            <li><strong>Walking aids</strong></li>
            <li><strong>Grips</strong></li>
        </ul>
        <p><strong>Contraindication:</strong> Kneeling, All 4's</p>`
    },
    {
        question: "What is the detailed postoperative PT protocol (1-2 days)?",
        answer: `<h3>Postoperative PT - 1-2 days</h3>
        <ul>
            <li><strong>Breathing exercises, vascular training, isometric exercises</strong></li>
            <li><strong>Guided active movement of operated hip</strong></li>
            <li><strong>Sit up</strong></li>
        </ul>`
    },
    {
        question: "What is the postoperative PT protocol (3rd day)?",
        answer: `<h3>Postoperative PT - 3rd day</h3>
        <ul>
            <li><strong>Standing with 4-leg frame, unloading (partial)</strong></li>
            <li><strong>Walking in/outside of room</strong></li>
            <li><strong>Self hygiene, toilet, bathroom</strong></li>
        </ul>`
    },
    {
        question: "What is the postoperative PT protocol (After 3 days)?",
        answer: `<h3>Postoperative PT - After 3 days</h3>
        <ul>
            <li><strong>Passive movements (CPM)</strong></li>
            <li><strong>Guided active, active exercises:</strong> flex, ext, no Abd</li>
            <li><strong>Different positions gradually</strong> (supine, side, prone, all 4's, sitting)</li>
            <li><strong>Develop walking ability - 2 elbow crutches</strong></li>
            <li><strong>Walk the stairs:</strong> Down - Aid, op, good, Up - Good, op, aid</li>
        </ul>`
    },
    {
        question: "What is the postoperative PT protocol (10-14 days)?",
        answer: `<h3>Postoperative PT - 10-14 days</h3>
        <ul>
            <li><strong>Take stitches out, underwater PT, home, bike</strong></li>
        </ul>`
    },
    {
        question: "What are the contraindicated movements after hip surgery depending on surgical cut?",
        answer: `<h3>Contraindicated Movements - Hip Surgery</h3>
        <p><strong>Depends on surgical cut:</strong></p>
        <ul>
            <li><strong>Open from LATERAL:</strong> ext. rot. add over 0°</li>
            <li><strong>Open from POSTERIOR:</strong> int. rot. add over 0°</li>
            <li><strong>Add over mid-line</strong></li>
            <li><strong>Flexion more than 90°</strong></li>
        </ul>`
    },
    {
        question: "What are the ergonomical advice for hip surgery patients?",
        answer: `<h3>Ergonomical Advice - Hip Surgery</h3>
        <ul>
            <li><strong>Don't sit too low, Don't bend too low (90°)</strong></li>
            <li><strong>In side lying: use a pillow, Do not cross legs</strong></li>
            <li><strong>Aid for walking, Aid for putting socks</strong></li>
            <li><strong>Extra seat in bath/toilet</strong></li>
            <li><strong>Grips in bath/toilet, carpet against slipping</strong></li>
        </ul>`
    },
    {
        question: "What is the modern surgical approach for orthopedic conditions?",
        answer: `<h3>Modern Surgical Approach - Minimal Invasive Technique</h3>
        <ul>
            <li><strong>Small indication area, small cut</strong></li>
            <li><strong>Less complaints after, less days in hospital</strong> (dismiss after 3 days)</li>
            <li><strong>Post-op therapy same</strong></li>
        </ul>`
    },
    {
        question: "What is Coxarthrosis?",
        answer: `<h3>Coxarthrosis</h3>
        <p><strong>Definition:</strong> Degeneration of bone and cartilage in the joint causes pain, loss of movement and deformity</p>
        
        <h4>Types:</h4>
        <ul>
            <li><strong>Primary:</strong> from age 50-60, often both hips, frequency increase with age, caused by physiological aging, more common in females</li>
            <li><strong>Secondary:</strong> There is always a primary hip joint disease in the background, can occur in early age</li>
        </ul>`
    },
    {
        question: "What can cause Secondary Coxarthrosis?",
        answer: `<h3>Secondary Coxarthrosis - Background Causes</h3>
        
        <h4>Childhood:</h4>
        <ul>
            <li><strong>Trauma, luxatio coxae, Perthes disease</strong></li>
            <li><strong>Epiphyseolysis capitis femoris, protrusio acetabuli, Inflammations</strong></li>
        </ul>
        
        <h4>Adult:</h4>
        <ul>
            <li><strong>Inflammations (RA, SPA), Aseptic necrosis of capitis femoris</strong></li>
            <li><strong>Fractures inside the hip joint, post-trauma conditions close to the joint</strong></li>
        </ul>
        
        <p><strong>Valid for knee and shoulder also! (different causes tho)</strong></p>`
    },
    {
        question: "What are the clinical findings in Coxarthrosis?",
        answer: `<h3>Coxarthrosis - Clinical Findings</h3>
        <ul>
            <li><strong>Pain (groin pain - typical hip joint pain)</strong></li>
            <li><strong>Loss of ROM (sequence of capsular pattern: ext, int.rot, abd, flex)</strong></li>
            <li><strong>Muscle and joint contractures, crepitation, leg length discrepancy</strong></li>
            <li><strong>Limping, gait disturbance</strong></li>
        </ul>`
    },
    {
        question: "What is the knee joint anatomy and physiological values?",
        answer: `<h3>Knee Joint Anatomy</h3>
        <p><strong>Consist of 3 bones, physiological valgus, 3 compartments:</strong></p>
        <ul>
            <li><strong>Medial tibiofemoral</strong></li>
            <li><strong>Lateral tibiofemoral</strong></li>
            <li><strong>Patellofemoral</strong></li>
        </ul>
        <p><strong>Stability, mobility</strong></p>`
    },
    {
        question: "What are the patellofemoral joint developmental disorders?",
        answer: `<h3>Patellofemoral Joint - Developmental Disorders</h3>
        <ul>
            <li><strong>Patella aplasia/hypoplasia</strong> - Less developed (smaller)</li>
            <li><strong>Patella bipartita/tripartita</strong> - 2 or 3 pieces</li>
            <li><strong>Patella alta/baja</strong> - high/low</li>
            <li><strong>Patella shape differences</strong></li>
            <li><strong>Patella congenital luxation</strong> - mostly laterally</li>
            <li><strong>Luxatio habitualis patellae</strong></li>
            <li><strong>Patella lateralisation</strong></li>
            <li><strong>Hyperpressure patella syndrome</strong></li>
            <li><strong>Chondromalacia patellae</strong></li>
        </ul>`
    },
    {
        question: "What is Luxatio congenitalis patellae?",
        answer: `<h3>Luxatio congenitalis patellae - from birth</h3>
        <ul>
            <li><strong>With extended knee the patella lies on the lateral condyle of femur</strong></li>
            <li><strong>Shortened structures:</strong> lig. patellae, retinaculum lateralis</li>
        </ul>
        
        <h4>Treatment:</h4>
        <ul>
            <li><strong>Surgical:</strong> lateral cut into retinaculum</li>
            <li><strong>Medial replacement of tibial tuberosity</strong></li>
        </ul>`
    },
    {
        question: "What is Luxatio habitualis patellae?",
        answer: `<h3>Luxatio habitualis patellae - certain movement</h3>
        <ul>
            <li><strong>Starts in early childhood, during flexion movement patello dislocates laterally</strong></li>
            <li><strong>In extension goes back to physiological</strong></li>
        </ul>
        
        <h4>Cause can be:</h4>
        <ul>
            <li><strong>Developmental disorder, Trauma, loose joint</strong></li>
            <li><strong>Hypoplasia of lateral condyle of femur, shortened tractus iliotibialis</strong></li>
        </ul>
        
        <h4>Treatment:</h4>
        <ul>
            <li><strong>Conservative:</strong> Vastus medialis strengthening (last part of extension)</li>
            <li><strong>Surgical:</strong> lateral retinaculum cut in + medial capsule tightening</li>
        </ul>`
    },
    {
        question: "What is the postoperative treatment for patella conditions (same for habitual and congenital)?",
        answer: `<h3>Postoperative Treatment - Patella Conditions</h3>
        <ul>
            <li><strong>3-4 weeks all around plaster</strong></li>
            <li><strong>Active exercises</strong></li>
            <li><strong>CPM gradually increasing ROM</strong></li>
            <li><strong>Weak muscles: strengthening (quads)</strong></li>
            <li><strong>Mobilize patella cranial-caudal</strong></li>
            <li><strong>Gait, stairs</strong></li>
        </ul>`
    },
    {
        question: "What are tibiofemoral joint physiological values and axial deformities?",
        answer: `<h3>Tibiofemoral Joint - Physiological values</h3>
        
        <h4>Axial deformities:</h4>
        <ul>
            <li><strong>Varum, Valgus, Recurvatum (over extension)</strong></li>
            <li><strong>Degeneration can also cause deformity</strong></li>
        </ul>
        
        <h4>Axial deformities: Varum/valgum</h4>
        <p><strong>Caused by:</strong> Arthrosis, Trauma, Cartilage disorder, Connective tissue weakness or loose ligaments, Bone nutrition problems, Compensation of hip contractures</p>
        <p><strong>Can be physiological in childhood</strong></p>`
    },
    {
        question: "What are the characteristics of Genu varum and Genu valgum?",
        answer: `<h3>Genu Varum and Valgum</h3>
        
        <h4>Genu varum:</h4>
        <p><strong>Medial side overloaded, lateral collateral lig. overstretched</strong></p>
        
        <h4>Genu valgus:</h4>
        <p><strong>Lateral side overloaded, medial collateral lig. overstretched</strong></p>`
    },
    {
        question: "What is the surgical correction for tibiofemoral deformities?",
        answer: `<h3>Correction by surgery (Tibia osteotomy)</h3>
        <ul>
            <li><strong>To create optimal loading in the joint</strong></li>
            <li><strong>Take out a piece of bone either on lateral or medial side</strong></li>
        </ul>`
    },
    {
        question: "What is the preoperative and postoperative PT for tibiofemoral surgery?",
        answer: `<h3>Tibiofemoral Surgery - PT Protocols</h3>
        
        <h4>Preoperative PT:</h4>
        <p><strong>Patient examination, Prepare patient for surgery, Introduce aids</strong></p>
        
        <h4>Postoperative PT:</h4>
        <ul>
            <li><strong>1 week lying in plaster</strong> (breathing, vascular training)</li>
            <li><strong>3 weeks loadable plaster - gait</strong></li>
            <li><strong>Remove plaster after 4 weeks</strong></li>
            <li><strong>CPM, active exercises</strong></li>
            <li><strong>Increase ROM, muscle strenght</strong></li>
            <li><strong>Patella mobilization</strong></li>
            <li><strong>Active lifestyle without overloading the knee</strong></li>
        </ul>`
    },
    {
        question: "What is Coxa valga/vara Infantum?",
        answer: `<h3>Coxa valga/vara Infantum</h3>
        <p><strong>Vara:</strong> < 110°, <strong>Valga:</strong> > 140°</p>
        <ul>
            <li><strong>Abnormal collodiaphyseal angle</strong></li>
            <li><strong>Uneven loading of joint surfaces, causes early degeneration</strong></li>
            <li><strong>Correction ONLY by surgery</strong></li>
        </ul>`
    },
    {
        question: "What is the intertrochanteric osteotomy procedure?",
        answer: `<h3>Intertrochanteric osteotomy (change collodiaphyseal angle)</h3>
        <p><strong>Goal of surgery:</strong> to prevent early arthrosis by better loading spreading</p>
        <ul>
            <li><strong>Take out a wedge (from med. or lat. side) then plate fixation</strong></li>
            <li><strong>No external fixation</strong></li>
            <li><strong>Distance between trochanter major and crista changes = causes weak gluteus medius</strong></li>
        </ul>`
    },
    {
        question: "What is the detailed postoperative therapy for intertrochanteric osteotomy?",
        answer: `<h3>Postoperative therapy - Intertrochanteric osteotomy</h3>
        <ul>
            <li><strong>Certain movements are not allowed yet</strong></li>
            <li><strong>Discuss with surgeon</strong></li>
            <li><strong>Mobilization: on 3-7 days</strong></li>
            <li><strong>While lying:</strong> Breathing and vascular training, isometric exercises</li>
            <li><strong>Partial loading: until bone heals (4-6 weeks) walking with frame</strong></li>
            <li><strong>Painfree passive and active hip exercises</strong></li>
            <li><strong>Strengthening: with little power (short lever)</strong></li>
            <li><strong>CONTRAINDICATIONS:</strong> Long lever, open chain exercises (active flexion abd against gravity) rotation movements (because shearing forces)</li>
        </ul>`
    },
    {
        question: "What is the progression timeline for intertrochanteric osteotomy recovery?",
        answer: `<h3>Intertrochanteric osteotomy - Recovery Timeline</h3>
        <ul>
            <li><strong>Develop walking with 2 crutches, stairs</strong></li>
            <li><strong>After bony healing use 2 sticks</strong></li>
            <li><strong>After 4-6 weeks ALL movements are allowed</strong></li>
            <li><strong>Home exercise - glut.med. strengthening</strong></li>
            <li><strong>Ergonomic advice</strong></li>
        </ul>`
    },
    {
        question: "What is the primary prevention and treatment approach for hip conditions?",
        answer: `<h3>Treatment - Primary Prevention</h3>
        <p><strong>Prevent 1st stage from developing</strong></p>
        <ul>
            <li><strong>Most important: prevention by healthy consumption, regular activity, optimal weight</strong></li>
            <li><strong>To prevent secondary arthrosis: early treatment of primary hip disease</strong></li>
        </ul>`
    },
    {
        question: "What are the conservative treatment goals for Coxarthrosis?",
        answer: `<h3>Conservative Treatment - Coxarthrosis Goals</h3>
        <ul>
            <li><strong>Decrease pain, increase ROM, prevent/treat contracture</strong></li>
            <li><strong>Increase muscle strenght</strong></li>
        </ul>
        
        <h4>Medical therapy:</h4>
        <p><strong>Pain relief, anti-inflammatory, muscle relaxant</strong></p>`
    },
    {
        question: "What is the detailed physiotherapy approach for Coxarthrosis?",
        answer: `<h3>Physiotherapy - Coxarthrosis</h3>
        <ul>
            <li><strong>Extension treatment</strong></li>
            <li><strong>Contracture treatment: JOINT:</strong> OMT traction, glide <strong>MUSCLE:</strong> stretching</li>
            <li><strong>Increase ROM:</strong> DIRECTION extension, int.rot, abd, flex</li>
            <li><strong>Increase muscle strenght:</strong> M.gluteus, M.quadriceps</li>
            <li><strong>Patient in unloaded position:</strong> stage 2 start, stage 3-4 always</li>
            <li><strong>Underwater PT</strong></li>
            <li><strong>Change in lifestyle:</strong> Diet, wheight, aid: 1 stick</li>
        </ul>`
    },
    {
        question: "What are the surgical treatment options for Coxarthrosis?",
        answer: `<h3>Surgical Treatment - Coxarthrosis</h3>
        <p><strong>Replace hip joint by a TEP, this ensures pain-free, full range movement</strong></p>
        
        <h4>Types:</h4>
        <ul>
            <li><strong>Cement fixation:</strong> at old age, very stable, 4 weeks unloaded</li>
            <li><strong>Cement free:</strong> at younger ages, 4 weeks unloading</li>
            <li><strong>Hybrid fixation</strong></li>
        </ul>`
    },
    {
        question: "What is the preoperative treatment for Coxarthrosis?",
        answer: `<h3>Preoperative treatment - Coxarthrosis</h3>
        <ul>
            <li><strong>Prepare patient for surgery (stretch out contractures)</strong></li>
            <li><strong>Patient examination, plan</strong></li>
            <li><strong>Introduce exercises, prepare for contraindications</strong></li>
            <li><strong>Teach the use of aid</strong></li>
        </ul>`
    },
    {
        question: "What is the main goal and detailed protocol for TEP postoperative treatment?",
        answer: `<h3>TEP Postoperative Treatment</h3>
        <p><strong>Main goal: Early mobilization</strong></p>
        
        <h4>3rd day - 1 week:</h4>
        <ul>
            <li><strong>Sitting, standing up, vascular train, breathing exercises, isometric exercise</strong></li>
        </ul>
        
        <h4>Gait:</h4>
        <ul>
            <li><strong>Two crutches or walking frame, with partial loading (two canes)</strong></li>
            <li><strong>Pelvis, hip and knee exercises: Unloaded in lying position</strong></li>
            <li><strong>Prevent contracture: Hip flexors!! (prone sleeping)</strong></li>
            <li><strong>Walking: In stairs and uneven surfaces</strong></li>
        </ul>
        
        <p><strong>CONTRAINDICATED MOVEMENT: Active hip ADD in first 6 weeks</strong></p>
        <p><strong>Start full wheight loading after 6 weeks (by 2 sticks)</strong></p>
        <p><strong>Home exercises, ergonomical advices for everyday activity</strong></p>`
    },
    {
        question: "What is Pes Planus/Planovalgus?",
        answer: `<h3>Pes Planus/Planovalgus</h3>
        <p><strong>Foot: arches, dome shaped structures</strong></p>
        
        <h4>Stabilizers:</h4>
        <ul>
            <li><strong>Passive:</strong> Ligaments and aponeurosis</li>
            <li><strong>Active:</strong> Muscles</li>
        </ul>
        
        <p><strong>Balance between stability and mobility</strong></p>
        <p><strong>Most common static disorder</strong></p>
        <p><strong>Cause can be: overloading</strong></p>`
    },
    {
        question: "What surgical treatment is available for severe foot conditions?",
        answer: `<h3>Surgical Treatment - Foot Conditions</h3>
        <p><strong>Correcting Tenotomy:</strong> Achillotomy, cut in joint capsule, deep flexors</p>
        <p><strong>Remove and replace insertion of m. Tibialis Ant.</strong></p>
        
        <h4>Post op: 4-6 weeks plaster in neutral position (soft tissue healing)</h4>
        <ul>
            <li><strong>CPM for ankle</strong></li>
            <li><strong>Guided active and active movements for foot and lower leg</strong></li>
            <li><strong>Measure lower leg surround measurements</strong></li>
            <li><strong>Involve parents</strong></li>
        </ul>`
    },
    {
        question: "What is Pes Equinovarus congenitus?",
        answer: `<h3>Pes Equinovarus congenitus</h3>
        
        <h4>Calcaneus:</h4>
        <ul>
            <li><strong>Equinus (tilted toward)</strong></li>
            <li><strong>Varus position</strong></li>
        </ul>
        
        <h4>Forefoot:</h4>
        <ul>
            <li><strong>Supinatus</strong></li>
            <li><strong>Adductus</strong></li>
        </ul>
        
        <h4>Symptoms in connection w/ deformity:</h4>
        <p><strong>Concave side:</strong></p>
        <ul>
            <li><strong>Shortened:</strong> Plantar ligaments, F.H.L, T.P, triceps surae</li>
        </ul>
        
        <p><strong>Convex side:</strong></p>
        <ul>
            <li><strong>Overstretched:</strong> Lateral ligaments, peroneus group</li>
        </ul>`
    },
    {
        question: "What is the therapy approach for Pes Equinovarus?",
        answer: `<h3>Pes Equinovarus - Therapy</h3>
        <p><strong>Most important:</strong> early recognition and immediate therapy</p>
        <p><strong>Start therapy:</strong> Right after birth</p>
        
        <h4>Conservative treatment:</h4>
        <ul>
            <li><strong>Immediate passive movements towards correct direction</strong></li>
            <li><strong>Special CPM for pes equinovarus</strong></li>
            <li><strong>Involve parents</strong></li>
            <li><strong>Active movements:</strong> plantar stimulation (tickle)</li>
            <li><strong>Fixation in corrected position</strong> (plaster, plastic, orthosis, tape)</li>
            <li><strong>Electrical stimulation on overstretched, weakened muscles</strong></li>
        </ul>`
    },
    {
        question: "What are the detailed pain stages in hip conditions?",
        answer: `<h3>Pain Stages in Hip Conditions</h3>
        <ul>
            <li><strong>PT - 1st stadium:</strong> Discomfort, pain after loading (after a while of loading)</li>
            <li><strong>PT - 2nd stadium:</strong> Pain at the start of movement after rest (initial pain)</li>
            <li><strong>(PT) - 3rd stadium:</strong> Pain at start + during load</li>
            <li><strong>Surgery - 4th stadium:</strong> Constant pain</li>
        </ul>
        
        <h4>Localization of pain:</h4>
        <ul>
            <li><strong>Inguinal region pain, trochanter major</strong></li>
            <li><strong>Reffered pain to gluteal area, Anterior side of thigh</strong></li>
            <li><strong>Reffered pain to knee</strong></li>
        </ul>`
    },
    {
        question: "What are the contractures and muscle changes in hip conditions?",
        answer: `<h3>Hip Conditions - Contractures and Muscle Changes</h3>
        
        <h4>Contractures:</h4>
        <p><strong>JOINT:</strong></p>
        <ul>
            <li><strong>CAPSULAR PATTERN:</strong> extension, internal rotation, abduction, external rotation (flexion)</li>
            <li><strong>CONTRACTURE:</strong> flexion, adduction, external rotation</li>
        </ul>
        
        <h4>MUSCLE:</h4>
        <ul>
            <li><strong>Tight, weak, stretched</strong></li>
            <li><strong>Iliopsoas, rectus femoris</strong></li>
            <li><strong>Hip adductors</strong></li>
            <li><strong>Hip external rotatores</strong></li>
        </ul>
        
        <h4>Leg length discrepancy:</h4>
        <ul>
            <li><strong>Real difference in lenght because of degeneration of cartilage</strong></li>
            <li><strong>Apparent difference in lenght because of flex-add contracture</strong></li>
            <li><strong>Limping</strong></li>
        </ul>`
    },
    {
        question: "What are the X-ray findings in hip conditions?",
        answer: `<h3>X-ray Findings - Hip Conditions</h3>
        <ul>
            <li><strong>Decreased interarticular space (gap)</strong></li>
            <li><strong>Joint contour lines are uneven (not smooth)</strong></li>
            <li><strong>Subchondral sclerosis</strong></li>
            <li><strong>Cysts</strong></li>
            <li><strong>Osteophytes</strong></li>
            <li><strong>Deformity of capitis femoris</strong></li>
        </ul>`
    },
    {
        question: "What are the symptoms of foot arch problems (Pes Planus)?",
        answer: `<h3>Pes Planus - Symptoms</h3>
        <ul>
            <li><strong>Transverse arch decrease, medial arch decrease</strong></li>
            <li><strong>Calcaneus valgus position (often, not always)</strong></li>
        </ul>`
    },
    {
        question: "What are the risk periods for developing foot problems?",
        answer: `<h3>Risk Periods for Foot Problems</h3>
        <ul>
            <li><strong>Start of standing, walking</strong></li>
            <li><strong>Early school years</strong></li>
            <li><strong>Puberty</strong></li>
            <li><strong>Pregnancy</strong></li>
            <li><strong>Overweight</strong></li>
            <li><strong>Occupational repetitive loading</strong></li>
            <li><strong>Inactive lifestyle</strong></li>
            <li><strong>Inadequate shoes</strong></li>
        </ul>`
    },
    {
        question: "What is the conservative treatment approach for foot problems?",
        answer: `<h3>Conservative Treatment - Foot Problems</h3>
        <ul>
            <li><strong>Goal: Prevention</strong></li>
            <li><strong>Pay attention on development of child</strong></li>
            <li><strong>Adequate shoes</strong></li>
            <li><strong>Avoid long walking on hard surface</strong></li>
            <li><strong>Barefoot walking on uneven surface</strong></li>
            <li><strong>For adults: plantar support in shoes</strong></li>
            <li><strong>Regular PT</strong></li>
        </ul>`
    },
    {
        question: "What is Patella lateralisation?",
        answer: `<h3>Patella lateralisation (congenital or trauma)</h3>
        <p><strong>Causes can be:</strong></p>
        <ul>
            <li><strong>Flattened lateral condyle, Patella shape different</strong></li>
            <li><strong>Muscular disbalance, tuber tibiae grown laterally (from birth)</strong></li>
        </ul>`
    },
    {
        question: "What is Hyperpressure patella syndrome?",
        answer: `<h3>Hyperpressure patella syndrome</h3>
        <p><strong>Definition:</strong> Hyper pressure on lateral side is caused by lateralisation</p>
        <p><strong>Symptoms:</strong> Pain, later degenerations</p>`
    },
    {
        question: "What is the treatment for Hyperpressure patella syndrome?",
        answer: `<h3>Treatment - Hyperpressure Patella Syndrome</h3>
        <ul>
            <li><strong>Strengthen vastus medialis, manual stretching of vastus lateralis</strong></li>
            <li><strong>Patella mobilization to medial side, taping technique</strong></li>
        </ul>`
    },
    {
        question: "What is Chondromalacia Patellae?",
        answer: `<h3>Chondromalacia Patellae</h3>
        <p><strong>Definition:</strong> Chondropathia = arthrosis</p>
        <p><strong>Causes cartilage degeneration in patellofemoral joint</strong></p>
        
        <h4>Causes can be:</h4>
        <ul>
            <li><strong>Patella shape difference, Trauma, Fracture</strong></li>
            <li><strong>Repetitive luxation, Lateralisation</strong></li>
        </ul>
        
        <p><strong>X-ray:</strong> typical arthritic signs 30°, 60°, 90°</p>`
    },
    {
        question: "What are the symptoms of Chondromalacia Patellae?",
        answer: `<h3>Chondromalacia Patellae - Symptoms</h3>
        <ul>
            <li><strong>Sitting with bent knee is painful, walking downstairs is painful</strong></li>
            <li><strong>Standing up from squatting is painful, kneeling is painful/difficult</strong></li>
            <li><strong>Retro patellar pain, pain on pressure</strong></li>
        </ul>`
    },
    {
        question: "What is the conservative treatment for Chondromalacia Patellae?",
        answer: `<h3>Conservative Treatment - Chondromalacia Patellae</h3>
        <ul>
            <li><strong>Anti-inflammatory, pain relief</strong></li>
            <li><strong>Strengthening of vastus medialis</strong></li>
            <li><strong>Mobilize patella</strong></li>
            <li><strong>Swimming</strong></li>
            <li><strong>Tapeing in corrected position</strong></li>
            <li><strong>Contraindication:</strong> full flexion, squatting, kneeling (last tuber tibiae)</li>
        </ul>`
    },
    {
        question: "What is the surgical treatment for Chondromalacia Patellae?",
        answer: `<h3>Surgical Treatment - Chondromalacia Patellae</h3>
        <p><strong>Lateral retinaculum cut in, Bondi-Maquet operation</strong></p>
        
        <h4>Post-operative protocol:</h4>
        <ul>
            <li><strong>1 week lying with plaster</strong> (Breathing, vascular training)</li>
            <li><strong>After 1 week, walking with plaster → Plaster off after 3 weeks</strong></li>
            <li><strong>CPM, active exercises, patella mobilization, Quadriceps strenght, Gait</strong></li>
        </ul>`
    },
    {
        question: "What are the physical therapy goals for Scapula elevata recovery?",
        answer: `<h3>Physical Therapy Goals - Scapula elevata Recovery</h3>
        <ul>
            <li><strong>Goal: Recover from muscle disbalance</strong></li>
            <li><strong>Strengthen: Plantar flexors, tibialis posterior, peroneus longus</strong></li>
            <li><strong>Correct structure of LE</strong></li>
            <li><strong>Teach correction of pelvis/lumbar spine</strong></li>
            <li><strong>Postural correction in: standing, walking</strong></li>
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