/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                         data.js                                 ║
 * ║              Programme NOUREL — Semaine type                    ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  Niveau : Débutante                                              ║
 * ║  Objectif : Recomposition                                        ║
 * ║  Focus : Dos · Bas du corps · Bras                               ║
 * ║                                                                  ║
 * ║  Structure : 4 séances muscu + cardio / 3 séances cardio seul   ║
 * ║                                                                  ║
 * ║  MODIFIER les répétitions  → champ "reps"                        ║
 * ║  MODIFIER les séries       → champ "sets"                        ║
 * ║  MODIFIER un exercice      → champ "name"                        ║
 * ║  MODIFIER le repos         → champ "rest" (en secondes)          ║
 * ║                                                                  ║
 * ║  Repos :                                                         ║
 * ║    Polyarticulaires  → 150s (2 min 30)                           ║
 * ║    Isolation         →  75s (1 min 15)                           ║
 * ║    Finisher cardio   → démarre immédiatement                     ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const PROGRAM = {

  meta: {
    name: "Programme Nourel",
    athlete: "Nourel",
    cycleLength: 7,
    objective: "Recomposition corporelle",
    level: "Débutante",
    focus: "Dos · Bas du corps · Bras",
    notes: [
      "Tempo excentrique lent : 2–3 secondes sur la descente",
      "Ajoute du poids uniquement quand toutes les reps sont propres",
      "Cardio finisher muscu : Inclinaison 12 / Vitesse 6 km/h / 30 min fixe",
      "Cardio seul remplaçable par natation de durée équivalente",
    ],
  },

  sessions: [

    // ════════════════════════════════════════════════════════════════
    // LUNDI — Bas du corps : Glutes & Ischios
    // ════════════════════════════════════════════════════════════════
    {
      id: "session_lundi",
      name: "Lundi",
      subtitle: "Bas du corps — Glutes & Ischios",
      tag: "Legs",
      color: "#D85A30",
      estimatedDuration: 75,
      warmup: "Mobilité hanche + 2×10 hip thrust poids du corps",
      cardioFinisher: "30 min tapis incliné — Inclinaison 12 / Vitesse 6 km/h",

      exercises: [
        {
          id: "ex_lun_1",
          name: "Hip Thrust barre",
          muscleGroup: "Fessiers",
          sets: 4,
          reps: "12",
          rest: 150,
          notes: "Épaules sur le banc, pad de protection sur les hanches. Tempo : descente 2–3 sec. Pousser avec les talons, contraction maximale en haut.",
          animation: null,
          substitutes: [
            {
              id: "sub_lun_1_a",
              name: "Hip Thrust machine",
              sets: 4,
              reps: "12",
              notes: "Réglage du siège : hanches alignées avec l'axe de la machine.",
            },
          ],
        },
        {
          id: "ex_lun_2",
          name: "Romanian Deadlift barre",
          muscleGroup: "Ischios · Fessiers",
          sets: 3,
          reps: "10",
          rest: 150,
          notes: "Dos plat tout au long. Descente 2–3 sec en ressentant l'étirement des ischios. Genoux légèrement fléchis, barre près des jambes.",
          animation: null,
          substitutes: [
            {
              id: "sub_lun_2_a",
              name: "RDL haltères",
              sets: 3,
              reps: "10",
              notes: "Même technique. Haltères de chaque côté des cuisses.",
            },
          ],
        },
        {
          id: "ex_lun_3",
          name: "Fentes marchées haltères",
          muscleGroup: "Fessiers · Quadriceps",
          sets: 3,
          reps: "10/jambe",
          rest: 150,
          notes: "Pas large, genou arrière qui descend près du sol. Tempo : descente 2 sec. Garder le buste droit.",
          animation: null,
          substitutes: [
            {
              id: "sub_lun_3_a",
              name: "Fentes statiques barre",
              sets: 3,
              reps: "10/jambe",
              notes: "Barre sur les trapèzes, même placement de pied qu'en fentes marchées.",
            },
          ],
        },
        {
          id: "ex_lun_4",
          name: "Leg Curl allongé",
          muscleGroup: "Ischios",
          sets: 3,
          reps: "15",
          rest: 75,
          notes: "Descente lente 2–3 sec. Contraction maximale en haut, hanches plaquées. Ne pas cambrer le bas du dos.",
          animation: null,
          substitutes: [
            {
              id: "sub_lun_4_a",
              name: "Leg Curl assis",
              sets: 3,
              reps: "15",
              notes: "Dos bien calé contre le dossier. Même tempo lent sur la descente.",
            },
          ],
        },
        {
          id: "ex_lun_5",
          name: "Abducteur machine",
          muscleGroup: "Abducteurs · Fessiers latéraux",
          sets: 3,
          reps: "20",
          rest: 75,
          notes: "Amplitude complète, ne pas laisser les poids retomber. Contraction à l'ouverture maximale.",
          animation: null,
          substitutes: [
            {
              id: "sub_lun_5_a",
              name: "Élastique latéral debout",
              sets: 3,
              reps: "20",
              notes: "Élastique aux chevilles. Écart latéral, maintien 1 sec en haut.",
            },
          ],
        },
        {
          id: "ex_lun_6",
          name: "Mollets debout machine",
          muscleGroup: "Mollets",
          sets: 3,
          reps: "20",
          rest: 75,
          notes: "Amplitude maximale : talon le plus bas possible, montée complète. Descente lente 2–3 sec.",
          animation: null,
          substitutes: [
            {
              id: "sub_lun_6_a",
              name: "Mollets debout à la presse",
              sets: 3,
              reps: "20",
              notes: "Pieds en bas de la plateforme, même amplitude.",
            },
          ],
        },
        {
          id: "ex_lun_7",
          name: "Gainage planche",
          muscleGroup: "Abdominaux · Core",
          sets: 3,
          reps: "45 sec",
          rest: 60,
          notes: "Corps aligné tête-talons, bassin ni en l'air ni affaissé. Respiration régulière.",
          animation: null,
          substitutes: [
            {
              id: "sub_lun_7_a",
              name: "Gainage sur genoux",
              sets: 3,
              reps: "45 sec",
              notes: "Même alignement que la planche classique, genoux posés au sol.",
            },
          ],
        },
      ],
    },


    // ════════════════════════════════════════════════════════════════
    // MARDI — Dos & Bras
    // ════════════════════════════════════════════════════════════════
    {
      id: "session_mardi",
      name: "Mardi",
      subtitle: "Dos & Bras",
      tag: "Pull",
      color: "#1D9E75",
      estimatedDuration: 70,
      warmup: "5 min rameur léger + rotations épaules",
      cardioFinisher: "30 min tapis incliné — Inclinaison 12 / Vitesse 6 km/h",

      exercises: [
        {
          id: "ex_mar_1",
          name: "Lat Pulldown prise large",
          muscleGroup: "Grand dorsal",
          sets: 4,
          reps: "10",
          rest: 150,
          notes: "Prise pronation plus large que les épaules. Tirer vers le haut du buste, omoplates rentrées. Descente contrôlée 2–3 sec.",
          animation: null,
          substitutes: [
            {
              id: "sub_mar_1_a",
              name: "Lat Pulldown prise neutre",
              sets: 4,
              reps: "10",
              notes: "Poignée en V (paumes se faisant face). Plus confortable pour les épaules.",
            },
          ],
        },
        {
          id: "ex_mar_2",
          name: "Rowing machine (chest supported)",
          muscleGroup: "Dos · Trapèzes",
          sets: 3,
          reps: "12",
          rest: 150,
          notes: "Poitrine sur l'appui, dos droit. Tirer les coudes en arrière en serrant les omoplates. Pas d'élan.",
          animation: null,
          substitutes: [
            {
              id: "sub_mar_2_a",
              name: "Rowing haltère unilatéral",
              sets: 3,
              reps: "12",
              notes: "Main et genou du même côté sur le banc. Dos parallèle au sol. Coude monte haut.",
            },
          ],
        },
        {
          id: "ex_mar_3",
          name: "Face Pull poulie haute",
          muscleGroup: "Épaules postérieures · Trapèzes",
          sets: 3,
          reps: "15",
          rest: 75,
          notes: "Corde au niveau du visage, tirer vers le front en écartant les mains. Excellent pour la posture. Mouvement lent et contrôlé.",
          animation: null,
          substitutes: [
            {
              id: "sub_mar_3_a",
              name: "Rowing haute poulie corde",
              sets: 3,
              reps: "15",
              notes: "Même principe, légèrement plus bas.",
            },
          ],
        },
        {
          id: "ex_mar_4",
          name: "Curl haltères alterné",
          muscleGroup: "Biceps",
          sets: 3,
          reps: "12",
          rest: 75,
          notes: "Supination complète en montant (paume vers le ciel). Pas de balancement du corps. Descente lente 2–3 sec.",
          animation: null,
          substitutes: [
            {
              id: "sub_mar_4_a",
              name: "Curl barre droite",
              sets: 3,
              reps: "12",
              notes: "Prise supination, coudes fixes contre le corps.",
            },
          ],
        },
        {
          id: "ex_mar_5",
          name: "Curl marteau haltères",
          muscleGroup: "Biceps · Brachial",
          sets: 3,
          reps: "12",
          rest: 75,
          notes: "Prise neutre (pouce vers le haut). Travaille aussi le brachial. Même tempo que le curl classique.",
          animation: null,
          substitutes: [
            {
              id: "sub_mar_5_a",
              name: "Curl marteau poulie basse",
              sets: 3,
              reps: "12",
              notes: "Tension constante sur tout l'arc de mouvement.",
            },
          ],
        },
        {
          id: "ex_mar_6",
          name: "Extension triceps poulie haute (corde)",
          muscleGroup: "Triceps",
          sets: 3,
          reps: "15",
          rest: 75,
          notes: "Coudes fixes et serrés contre le corps. Écarter légèrement les mains en bas pour la contraction maximale. Descente lente.",
          animation: null,
          substitutes: [
            {
              id: "sub_mar_6_a",
              name: "Skull crusher haltères",
              sets: 3,
              reps: "15",
              notes: "Allongée sur le banc, haltères au-dessus du front. Coudes pointés vers le plafond.",
            },
          ],
        },
      ],
    },


    // ════════════════════════════════════════════════════════════════
    // MERCREDI — Cardio uniquement
    // ════════════════════════════════════════════════════════════════
    {
      id: "session_mercredi",
      name: "Mercredi",
      subtitle: "Cardio uniquement",
      tag: "Cardio",
      color: "#534AB7",
      estimatedDuration: 55,
      warmup: null,
      cardioFinisher: null,
      type: "cardio",
      cardioNote: "Journée récup musculaire — intensité modérée. Total : 45–55 min.",

      exercises: [
        {
          id: "ex_mer_1",
          name: "Tapis incliné — 30 min",
          muscleGroup: "Cardio · Principal",
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: "Inclinaison 12 / Vitesse 6 km/h. Allure constante.",
          animation: null,
          substitutes: [
            {
              id: "sub_mer_1_a",
              name: "Natation — 45 à 60 min",
              sets: 1,
              reps: "45–60 min",
              notes: "Si tapis/salle non disponibles. Nage à allure modérée.",
            },
          ],
        },
        {
          id: "ex_mer_2",
          name: "Rameur — 15 min (bonus)",
          muscleGroup: "Cardio · Bonus 1",
          sets: 1,
          reps: "15 min",
          rest: 0,
          notes: "Allure régulière, rythme confortable. Option si tu as l'énergie.",
          animation: null,
          substitutes: [],
        },
        {
          id: "ex_mer_3",
          name: "Escalier — 10 min (bonus)",
          muscleGroup: "Cardio · Bonus 2",
          sets: 1,
          reps: "10 min",
          rest: 0,
          notes: "En finisher, allure modérée. Option après le rameur.",
          animation: null,
          substitutes: [],
        },
      ],
    },


    // ════════════════════════════════════════════════════════════════
    // JEUDI — Bas du corps : Quadriceps
    // ════════════════════════════════════════════════════════════════
    {
      id: "session_jeudi",
      name: "Jeudi",
      subtitle: "Bas du corps — Quadriceps",
      tag: "Legs",
      color: "#D85A30",
      estimatedDuration: 75,
      warmup: "5 min vélo + 2×10 squats poids du corps",
      cardioFinisher: "30 min tapis incliné — Inclinaison 12 / Vitesse 6 km/h",

      exercises: [
        {
          id: "ex_jeu_1",
          name: "Goblet Squat haltère",
          muscleGroup: "Quadriceps · Fessiers",
          sets: 4,
          reps: "12",
          rest: 150,
          notes: "Haltère tenu à deux mains au niveau du buste. Pieds à largeur d'épaules, pointes légèrement ouvertes. Descente 2–3 sec sous la parallèle.",
          animation: null,
          substitutes: [
            {
              id: "sub_jeu_1_a",
              name: "Presse à cuisses",
              sets: 4,
              reps: "12",
              notes: "Pieds au centre ou en haut de la plateforme selon le focus.",
            },
          ],
        },
        {
          id: "ex_jeu_2",
          name: "Hack Squat machine",
          muscleGroup: "Quadriceps",
          sets: 3,
          reps: "10",
          rest: 150,
          notes: "Dos plaqué contre le dossier. Pieds bas sur la plateforme pour cibler les quadriceps. Descente lente 2–3 sec.",
          animation: null,
          substitutes: [
            {
              id: "sub_jeu_2_a",
              name: "Back Squat barre (léger)",
              sets: 3,
              reps: "10",
              notes: "Barre sur les trapèzes, charge légère. Dos droit, regard horizontal.",
            },
          ],
        },
        {
          id: "ex_jeu_3",
          name: "Split Squat bulgare haltères",
          muscleGroup: "Quadriceps · Fessiers",
          sets: 3,
          reps: "10/jambe",
          rest: 150,
          notes: "Pied arrière sur le banc, pied avant loin devant. Descente verticale du genou arrière. Tempo 2–3 sec. Prends le temps entre les côtés.",
          animation: null,
          substitutes: [
            {
              id: "sub_jeu_3_a",
              name: "Fentes avant haltères",
              sets: 3,
              reps: "10/jambe",
              notes: "Pas vers l'avant, genou avant aligné avec le pied. Moins exigeant en équilibre.",
            },
          ],
        },
        {
          id: "ex_jeu_4",
          name: "Leg Extension machine",
          muscleGroup: "Quadriceps",
          sets: 3,
          reps: "15",
          rest: 75,
          notes: "Extension complète + 2 sec de contraction isométrique en haut. Descente lente 2–3 sec.",
          animation: null,
          substitutes: [
            {
              id: "sub_jeu_4_a",
              name: "Fentes statiques lentes",
              sets: 3,
              reps: "15",
              notes: "Descente très lente (3–4 sec), maintien de la position basse 1 sec.",
            },
          ],
        },
        {
          id: "ex_jeu_5",
          name: "Adducteur machine",
          muscleGroup: "Adducteurs",
          sets: 3,
          reps: "20",
          rest: 75,
          notes: "Fermeture lente et contrôlée, ne pas claquer les genoux. Retour lent à l'ouverture (2–3 sec).",
          animation: null,
          substitutes: [
            {
              id: "sub_jeu_5_a",
              name: "Sumo Squat haltère",
              sets: 3,
              reps: "20",
              notes: "Pieds très écartés, pointes à 45°. Haltère tenu entre les jambes.",
            },
          ],
        },
        {
          id: "ex_jeu_6",
          name: "Mollets assis machine",
          muscleGroup: "Soléaire · Mollets",
          sets: 3,
          reps: "20",
          rest: 75,
          notes: "Pad sur les genoux. Amplitude maximale : talon très bas, montée complète. Descente lente 2–3 sec. Cible le soléaire.",
          animation: null,
          substitutes: [
            {
              id: "sub_jeu_6_a",
              name: "Mollets debout avec haltères",
              sets: 3,
              reps: "20",
              notes: "Un haltère dans chaque main, debout sur une marche si disponible.",
            },
          ],
        },
        {
          id: "ex_jeu_7",
          name: "Crunch poulie haute",
          muscleGroup: "Abdominaux",
          sets: 3,
          reps: "15",
          rest: 60,
          notes: "À genoux dos à la poulie, corde derrière la tête. Fléchir le buste vers le bas en contractant les abdos — pas en tirant avec les bras.",
          animation: null,
          substitutes: [
            {
              id: "sub_jeu_7_a",
              name: "Crunch au sol",
              sets: 3,
              reps: "15",
              notes: "Mains derrière la tête, genoux fléchis. Monter les épaules, pas la nuque.",
            },
          ],
        },
      ],
    },


    // ════════════════════════════════════════════════════════════════
    // VENDREDI — Dos complet & Bras
    // ════════════════════════════════════════════════════════════════
    {
      id: "session_vendredi",
      name: "Vendredi",
      subtitle: "Dos complet & Bras",
      tag: "Pull",
      color: "#1D9E75",
      estimatedDuration: 70,
      warmup: "5 min rameur + mobilité thoracique",
      cardioFinisher: "30 min tapis incliné — Inclinaison 12 / Vitesse 6 km/h",

      exercises: [
        {
          id: "ex_ven_1",
          name: "Rowing barre pronation",
          muscleGroup: "Dos · Trapèzes",
          sets: 4,
          reps: "10",
          rest: 150,
          notes: "Prise pronation (paumes vers le bas), buste penché à ~45°. Tirer la barre vers le nombril. Dos plat, descente contrôlée 2–3 sec.",
          animation: null,
          substitutes: [
            {
              id: "sub_ven_1_a",
              name: "Rowing machine",
              sets: 4,
              reps: "10",
              notes: "Machine chest-supported ou tirage horizontal assis selon dispo.",
            },
          ],
        },
        {
          id: "ex_ven_2",
          name: "Lat Pulldown prise neutre",
          muscleGroup: "Grand dorsal",
          sets: 3,
          reps: "12",
          rest: 150,
          notes: "Poignée en V, paumes se faisant face. Tirer vers le haut du buste en rentrant les omoplates. Descente lente 2–3 sec.",
          animation: null,
          substitutes: [
            {
              id: "sub_ven_2_a",
              name: "Lat Pulldown unilatéral poulie",
              sets: 3,
              reps: "12",
              notes: "Un bras à la fois avec poignée simple. Utile pour corriger les déséquilibres.",
            },
          ],
        },
        {
          id: "ex_ven_3",
          name: "Rowing haltère unilatéral",
          muscleGroup: "Dos · Grand dorsal",
          sets: 3,
          reps: "12/côté",
          rest: 150,
          notes: "Appui main + genou sur le banc, dos horizontal. Coude monte haut en serrant l'omoplate. Descente lente 2–3 sec. Commence par le côté faible.",
          animation: null,
          substitutes: [
            {
              id: "sub_ven_3_a",
              name: "Rowing barre à un bras",
              sets: 3,
              reps: "12/côté",
              notes: "Même principe avec une barre t-bar ou barre libre.",
            },
          ],
        },
        {
          id: "ex_ven_4",
          name: "Curl pupitre haltère",
          muscleGroup: "Biceps",
          sets: 3,
          reps: "12",
          rest: 75,
          notes: "Coude calé sur le pupitre, bras incliné. Isolation pure du biceps, pas d'élan possible. Descente très lente 3 sec.",
          animation: null,
          substitutes: [
            {
              id: "sub_ven_4_a",
              name: "Curl poulie basse",
              sets: 3,
              reps: "12",
              notes: "Tension constante sur tout l'arc de mouvement. Coude fixe.",
            },
          ],
        },
        {
          id: "ex_ven_5",
          name: "Extension triceps au-dessus de la tête",
          muscleGroup: "Triceps",
          sets: 3,
          reps: "12",
          rest: 75,
          notes: "Haltère à deux mains au-dessus de la tête, coudes pointés vers le plafond. Descente derrière la tête, lente 2–3 sec. Cible le chef long du triceps.",
          animation: null,
          substitutes: [
            {
              id: "sub_ven_5_a",
              name: "Extension triceps poulie haute",
              sets: 3,
              reps: "12",
              notes: "Prise corde ou barre droite, coudes fixes.",
            },
          ],
        },
        {
          id: "ex_ven_6",
          name: "Ab Wheel (genoux)",
          muscleGroup: "Abdominaux · Core",
          sets: 3,
          reps: "10",
          rest: 60,
          notes: "À genoux, rouler lentement vers l'avant en gardant le dos plat. Revenir en contractant les abdos. Ne jamais laisser les lombaires se creuser.",
          animation: null,
          substitutes: [
            {
              id: "sub_ven_6_a",
              name: "Gainage dynamique",
              sets: 3,
              reps: "10",
              notes: "Depuis la planche : ramener alternativement les genoux vers la poitrine.",
            },
          ],
        },
      ],
    },


    // ════════════════════════════════════════════════════════════════
    // SAMEDI — Cardio uniquement
    // ════════════════════════════════════════════════════════════════
    {
      id: "session_samedi",
      name: "Samedi",
      subtitle: "Cardio uniquement",
      tag: "Cardio",
      color: "#534AB7",
      estimatedDuration: 55,
      warmup: null,
      cardioFinisher: null,
      type: "cardio",
      cardioNote: "Corps reposé — tu peux monter l'intensité sur les bonus. Total : 50–60 min.",

      exercises: [
        {
          id: "ex_sam_1",
          name: "Tapis incliné — 30 min",
          muscleGroup: "Cardio · Principal",
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: "Inclinaison 12 / Vitesse 6 km/h. Allure constante.",
          animation: null,
          substitutes: [
            {
              id: "sub_sam_1_a",
              name: "Natation — 45 à 60 min",
              sets: 1,
              reps: "45–60 min",
              notes: "Si tapis/salle non disponibles.",
            },
          ],
        },
        {
          id: "ex_sam_2",
          name: "Escalier — 20 min (bonus)",
          muscleGroup: "Cardio · Bonus",
          sets: 1,
          reps: "20 min",
          rest: 0,
          notes: "Intervalle : 1 min effort / 1 min récup.",
          animation: null,
          substitutes: [
            {
              id: "sub_sam_2_a",
              name: "Rameur — 20 min",
              sets: 1,
              reps: "20 min",
              notes: "Allure modérée à soutenue.",
            },
          ],
        },
      ],
    },


    // ════════════════════════════════════════════════════════════════
    // DIMANCHE — Cardio léger / Récupération active
    // ════════════════════════════════════════════════════════════════
    {
      id: "session_dimanche",
      name: "Dimanche",
      subtitle: "Cardio léger · Récupération active",
      tag: "Récup",
      color: "#888780",
      estimatedDuration: 45,
      warmup: null,
      cardioFinisher: null,
      type: "cardio",
      cardioNote: "Intensité basse. Objectif : récupérer, pas brûler. Ce jour prépare la semaine suivante — ne te grille pas. Total : 45 min max.",

      exercises: [
        {
          id: "ex_dim_1",
          name: "Tapis incliné — 30 min",
          muscleGroup: "Cardio · Principal",
          sets: 1,
          reps: "30 min",
          rest: 0,
          notes: "Inclinaison 12 / Vitesse 6 km/h. Allure confortable.",
          animation: null,
          substitutes: [
            {
              id: "sub_dim_1_a",
              name: "Natation — 30 à 45 min",
              sets: 1,
              reps: "30–45 min",
              notes: "Nage douce — journée de récupération.",
            },
          ],
        },
        {
          id: "ex_dim_2",
          name: "Rameur — 15 min (bonus doux)",
          muscleGroup: "Cardio · Bonus",
          sets: 1,
          reps: "15 min",
          rest: 0,
          notes: "Allure très légère — récupération active uniquement.",
          animation: null,
          substitutes: [
            {
              id: "sub_dim_2_a",
              name: "Marche tapis — 20 min",
              sets: 1,
              reps: "20 min",
              notes: "Inclinaison 5–8, rythme très confortable.",
            },
          ],
        },
      ],
    },


  ], // fin sessions
}; // fin PROGRAM
