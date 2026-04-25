/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                         data.js                                 ║
 * ║              Programme d'entraînement — Contenu                 ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  C'est LE fichier à modifier pour changer le programme.         ║
 * ║                                                                  ║
 * ║  MODIFIER les répétitions  → champ  "reps"                      ║
 * ║  MODIFIER les séries       → champ  "sets"                      ║
 * ║  MODIFIER un exercice      → champ  "name"                      ║
 * ║  AJOUTER un exercice       → copier un bloc {...} dans          ║
 * ║                              exercises[] et l'ajouter           ║
 * ║  AJOUTER une substitution  → copier un bloc {...} dans          ║
 * ║                              substitutes[]                       ║
 * ║                                                                  ║
 * ║  ⚠  Les "id" doivent être UNIQUES dans tout le fichier.         ║
 * ║     Convention : "ex_[séance]_[numéro]"                         ║
 * ║                  "sub_[ex_id]_[lettre]"                         ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const PROGRAM = {

  // ─── Infos générales ──────────────────────────────────────────────────────
  meta: {
    name: "Programme Strength & Shape",
    athlete: "Prénom",                       // ← Remplace par le prénom de ton amie
    startDate: "2025-01-06",                 // ← Format YYYY-MM-DD
    cycleLength: 4,                          // Nombre de séances par cycle
    objective: "Prise de masse / Tonification",
  },


  // ─── Séances ──────────────────────────────────────────────────────────────
  sessions: [


    // ════════════════════════════════════════════════════════════════════════
    // SÉANCE 1 — Pectoraux · Épaules · Triceps
    // ════════════════════════════════════════════════════════════════════════
    {
      id: "session_1",
      name: "Séance 1",
      subtitle: "Pectoraux · Épaules · Triceps",
      tag: "Push",                           // Étiquette visible dans l'UI
      color: "#6C63FF",                      // Couleur d'accentuation de la séance
      estimatedDuration: 55,                 // Durée estimée en minutes
      warmup: "5 min vélo léger + rotations épaules",

      exercises: [

        {
          id: "ex_1_1",
          name: "Développé couché barre",
          muscleGroup: "Pectoraux",
          sets: 4,
          reps: "8–10",
          rest: 90,                          // Récupération en secondes
          notes: "Coudes à 45° du corps, descente contrôlée sur 3 secondes",
          animation: null,                   // Ex: "bench_press.gif" — null si pas d'image
          substitutes: [
            {
              id: "sub_1_1_a",
              name: "Développé couché haltères",
              sets: 4,
              reps: "8–10",
              notes: "Plus grande amplitude — idéal si la barre est prise",
            },
            {
              id: "sub_1_1_b",
              name: "Pompes lestées",
              sets: 4,
              reps: "10–12",
              notes: "Avec gilet lesté ou partenaire sur le dos",
            },
          ],
        },

        {
          id: "ex_1_2",
          name: "Développé militaire haltères",
          muscleGroup: "Épaules",
          sets: 3,
          reps: "10–12",
          rest: 75,
          notes: "Assis ou debout — ne pas verrouiller les coudes en haut",
          animation: null,
          substitutes: [
            {
              id: "sub_1_2_a",
              name: "Développé militaire machine",
              sets: 3,
              reps: "10–12",
              notes: "Réglage de la prise : paumes vers l'avant",
            },
            {
              id: "sub_1_2_b",
              name: "Élévations latérales câble",
              sets: 3,
              reps: "12–15",
              notes: "Mouvement lent, focus sur le deltoïde latéral",
            },
          ],
        },

        {
          id: "ex_1_3",
          name: "Fly câble (écarté poulie haute)",
          muscleGroup: "Pectoraux",
          sets: 3,
          reps: "12–15",
          rest: 60,
          notes: "Bras légèrement fléchis, mouvement en arc de cercle",
          animation: null,
          substitutes: [
            {
              id: "sub_1_3_a",
              name: "Écarté haltères banc plat",
              sets: 3,
              reps: "12–15",
              notes: "Prise neutre, contrôle total sur la descente",
            },
            {
              id: "sub_1_3_b",
              name: "Peck-deck machine",
              sets: 3,
              reps: "12–15",
              notes: "Bonne option d'isolation si les câbles sont pris",
            },
          ],
        },

        {
          id: "ex_1_4",
          name: "Élévations latérales haltères",
          muscleGroup: "Épaules",
          sets: 3,
          reps: "12–15",
          rest: 60,
          notes: "Légère inclinaison avant du buste, pouce légèrement vers le bas",
          animation: null,
          substitutes: [
            {
              id: "sub_1_4_a",
              name: "Élévations latérales machine",
              sets: 3,
              reps: "12–15",
              notes: null,
            },
            {
              id: "sub_1_4_b",
              name: "Élévations frontales câble",
              sets: 3,
              reps: "12–15",
              notes: "Travaille davantage le deltoïde antérieur",
            },
          ],
        },

        {
          id: "ex_1_5",
          name: "Triceps poulie haute (corde)",
          muscleGroup: "Triceps",
          sets: 3,
          reps: "12–15",
          rest: 60,
          notes: "Coudes fixes et serrés contre le corps tout au long du mouvement",
          animation: null,
          substitutes: [
            {
              id: "sub_1_5_a",
              name: "Dips banc ou barres parallèles",
              sets: 3,
              reps: "10–12",
              notes: "Corps droit pour cibler les triceps",
            },
            {
              id: "sub_1_5_b",
              name: "Extension triceps haltère une main",
              sets: 3,
              reps: "10–12",
              notes: "Travail unilatéral — bon pour corriger les déséquilibres",
            },
          ],
        },

      ], // fin exercises séance 1
    },


    // ════════════════════════════════════════════════════════════════════════
    // SÉANCE 2 — Dos · Biceps
    // ════════════════════════════════════════════════════════════════════════
    {
      id: "session_2",
      name: "Séance 2",
      subtitle: "Dos · Biceps",
      tag: "Pull",
      color: "#1D9E75",
      estimatedDuration: 50,
      warmup: "5 min rameur + mobilité thoracique",

      exercises: [

        {
          id: "ex_2_1",
          name: "Tractions (ou Lat Pulldown)",
          muscleGroup: "Dos",
          sets: 4,
          reps: "6–8",
          rest: 90,
          notes: "Prise pronation légèrement plus large que les épaules. Si tractions trop difficiles → machine d'assistance",
          animation: null,
          substitutes: [
            {
              id: "sub_2_1_a",
              name: "Tirage vertical machine",
              sets: 4,
              reps: "8–10",
              notes: null,
            },
            {
              id: "sub_2_1_b",
              name: "Tirage vertical câble prise serrée",
              sets: 4,
              reps: "10–12",
              notes: "Prise supination — plus d'activation biceps",
            },
          ],
        },

        {
          id: "ex_2_2",
          name: "Rowing barre (Bent-over row)",
          muscleGroup: "Dos",
          sets: 4,
          reps: "8–10",
          rest: 90,
          notes: "Dos plat, légère flexion des genoux, tirer la barre vers le nombril",
          animation: null,
          substitutes: [
            {
              id: "sub_2_2_a",
              name: "Rowing haltère unilatéral",
              sets: 4,
              reps: "8–10",
              notes: "Appui genou + main sur le banc, dos horizontal",
            },
            {
              id: "sub_2_2_b",
              name: "Rowing machine (Hammer Strength)",
              sets: 4,
              reps: "10–12",
              notes: null,
            },
          ],
        },

        {
          id: "ex_2_3",
          name: "Tirage horizontal câble assis",
          muscleGroup: "Dos",
          sets: 3,
          reps: "10–12",
          rest: 75,
          notes: "Rentrer les omoplates en fin de mouvement, buste droit",
          animation: null,
          substitutes: [
            {
              id: "sub_2_3_a",
              name: "Rowing prise neutre machine",
              sets: 3,
              reps: "10–12",
              notes: null,
            },
            {
              id: "sub_2_3_b",
              name: "Face pull câble",
              sets: 3,
              reps: "12–15",
              notes: "Excellent pour la posture et les épaules postérieures",
            },
          ],
        },

        {
          id: "ex_2_4",
          name: "Curl biceps haltères alterné",
          muscleGroup: "Biceps",
          sets: 3,
          reps: "10–12",
          rest: 60,
          notes: "Supination complète en montant, pas de balancement du corps",
          animation: null,
          substitutes: [
            {
              id: "sub_2_4_a",
              name: "Curl barre EZ",
              sets: 3,
              reps: "10–12",
              notes: "Prise mi-serrée pour réduire la pression sur les poignets",
            },
            {
              id: "sub_2_4_b",
              name: "Curl marteau câble",
              sets: 3,
              reps: "12–15",
              notes: "Prise neutre — travaille aussi le brachial",
            },
          ],
        },

        {
          id: "ex_2_5",
          name: "Curl pupitre (Preacher curl)",
          muscleGroup: "Biceps",
          sets: 3,
          reps: "10–12",
          rest: 60,
          notes: "Mouvement strict, pas d'élan — isolation maximale du biceps",
          animation: null,
          substitutes: [
            {
              id: "sub_2_5_a",
              name: "Curl concentré assis",
              sets: 3,
              reps: "10–12",
              notes: "Coude calé contre la face interne de la cuisse",
            },
            {
              id: "sub_2_5_b",
              name: "Curl câble basse poulie",
              sets: 3,
              reps: "12–15",
              notes: "Tension constante sur tout l'arc de mouvement",
            },
          ],
        },

      ], // fin exercises séance 2
    },


    // ════════════════════════════════════════════════════════════════════════
    // SÉANCE 3 — Jambes · Fessiers
    // ════════════════════════════════════════════════════════════════════════
    {
      id: "session_3",
      name: "Séance 3",
      subtitle: "Jambes · Fessiers",
      tag: "Legs",
      color: "#D85A30",
      estimatedDuration: 60,
      warmup: "5 min vélo + 2×15 squats poids du corps",

      exercises: [

        {
          id: "ex_3_1",
          name: "Squat barre",
          muscleGroup: "Quadriceps / Fessiers",
          sets: 4,
          reps: "8–10",
          rest: 120,
          notes: "Pieds à largeur d'épaules, descendre jusqu'à la parallèle ou en dessous",
          animation: null,
          substitutes: [
            {
              id: "sub_3_1_a",
              name: "Squat goblet haltère",
              sets: 4,
              reps: "10–12",
              notes: "Haltère tenu à deux mains au niveau du buste",
            },
            {
              id: "sub_3_1_b",
              name: "Presse à cuisses",
              sets: 4,
              reps: "10–12",
              notes: "Pieds hauts sur la plateforme pour cibler les fessiers",
            },
          ],
        },

        {
          id: "ex_3_2",
          name: "Hip thrust barre",
          muscleGroup: "Fessiers",
          sets: 4,
          reps: "10–12",
          rest: 90,
          notes: "Épaules sur le banc, pad de protection sur les hanches, pousser avec les talons",
          animation: null,
          substitutes: [
            {
              id: "sub_3_2_a",
              name: "Hip thrust machine",
              sets: 4,
              reps: "10–12",
              notes: null,
            },
            {
              id: "sub_3_2_b",
              name: "Pont fessier haltère au sol",
              sets: 4,
              reps: "12–15",
              notes: "Haltère posé sur le bassin, pieds à plat au sol",
            },
          ],
        },

        {
          id: "ex_3_3",
          name: "Leg curl couché (ischio)",
          muscleGroup: "Ischio-jambiers",
          sets: 3,
          reps: "10–12",
          rest: 75,
          notes: "Contraction maximale en haut, descente lente sur 3 secondes",
          animation: null,
          substitutes: [
            {
              id: "sub_3_3_a",
              name: "Leg curl assis machine",
              sets: 3,
              reps: "10–12",
              notes: null,
            },
            {
              id: "sub_3_3_b",
              name: "Romanian Deadlift haltères",
              sets: 3,
              reps: "10–12",
              notes: "Dos droit, ressentir l'étirement des ischio lors de la descente",
            },
          ],
        },

        {
          id: "ex_3_4",
          name: "Leg extension machine",
          muscleGroup: "Quadriceps",
          sets: 3,
          reps: "12–15",
          rest: 60,
          notes: "Extension complète en haut + 2 sec de contraction isométrique",
          animation: null,
          substitutes: [
            {
              id: "sub_3_4_a",
              name: "Fentes marchées haltères",
              sets: 3,
              reps: "10/côté",
              notes: "Le genou avant ne dépasse pas la pointe des orteils",
            },
            {
              id: "sub_3_4_b",
              name: "Sissy squat (poids du corps)",
              sets: 3,
              reps: "12–15",
              notes: "Talons surélevés, genoux poussés vers l'avant",
            },
          ],
        },

        {
          id: "ex_3_5",
          name: "Mollets debout à la machine",
          muscleGroup: "Mollets",
          sets: 4,
          reps: "15–20",
          rest: 60,
          notes: "Amplitude maximale — descente lente, montée explosive",
          animation: null,
          substitutes: [
            {
              id: "sub_3_5_a",
              name: "Mollets à la presse à cuisses",
              sets: 4,
              reps: "15–20",
              notes: "Pieds en bas de la plateforme",
            },
            {
              id: "sub_3_5_b",
              name: "Mollets poids du corps sur marche",
              sets: 4,
              reps: "20–25",
              notes: "Version unilatérale pour plus d'intensité",
            },
          ],
        },

      ], // fin exercises séance 3
    },


    // ════════════════════════════════════════════════════════════════════════
    // SÉANCE 4 — Full Body · Renforcement
    // ════════════════════════════════════════════════════════════════════════
    {
      id: "session_4",
      name: "Séance 4",
      subtitle: "Full Body · Renforcement",
      tag: "Full",
      color: "#534AB7",
      estimatedDuration: 45,
      warmup: "5 min corde à sauter + mobilité dynamique",

      exercises: [

        {
          id: "ex_4_1",
          name: "Soulevé de terre haltères",
          muscleGroup: "Dos / Fessiers / Ischio",
          sets: 4,
          reps: "8–10",
          rest: 90,
          notes: "Dos neutre tout au long du mouvement, pousser le sol avec les jambes",
          animation: null,
          substitutes: [
            {
              id: "sub_4_1_a",
              name: "Soulevé de terre barre",
              sets: 4,
              reps: "6–8",
              notes: null,
            },
            {
              id: "sub_4_1_b",
              name: "Kettlebell swing",
              sets: 4,
              reps: "12–15",
              notes: "Flexion de hanches (pas de squat) — mouvement explosif",
            },
          ],
        },

        {
          id: "ex_4_2",
          name: "Développé couché haltères prise neutre",
          muscleGroup: "Pectoraux / Triceps",
          sets: 3,
          reps: "10–12",
          rest: 75,
          notes: "Prise marteau (paumes en regard) — moins de pression sur les épaules",
          animation: null,
          substitutes: [
            {
              id: "sub_4_2_a",
              name: "Pompes pieds surélevés",
              sets: 3,
              reps: "12–15",
              notes: null,
            },
            {
              id: "sub_4_2_b",
              name: "Développé machine convergent",
              sets: 3,
              reps: "10–12",
              notes: null,
            },
          ],
        },

        {
          id: "ex_4_3",
          name: "Tirage vertical prise serrée",
          muscleGroup: "Dos / Biceps",
          sets: 3,
          reps: "10–12",
          rest: 75,
          notes: "Tirer vers le haut du buste, coudes qui descendent le long du corps",
          animation: null,
          substitutes: [
            {
              id: "sub_4_3_a",
              name: "Tirage horizontal assis",
              sets: 3,
              reps: "10–12",
              notes: null,
            },
            {
              id: "sub_4_3_b",
              name: "Face pull câble",
              sets: 3,
              reps: "12–15",
              notes: "Excellent pour la posture et les épaules postérieures",
            },
          ],
        },

        {
          id: "ex_4_4",
          name: "Gainage planche",
          muscleGroup: "Abdominaux / Core",
          sets: 3,
          reps: "45 sec",
          rest: 45,
          notes: "Corps aligné de la tête aux talons, bassin ni en l'air ni affaissé",
          animation: null,
          substitutes: [
            {
              id: "sub_4_4_a",
              name: "Crunch câble à genoux",
              sets: 3,
              reps: "15–20",
              notes: null,
            },
            {
              id: "sub_4_4_b",
              name: "Ab wheel (roue abdominale)",
              sets: 3,
              reps: "8–10",
              notes: "Très efficace — garder le dos plat pendant l'extension",
            },
          ],
        },

      ], // fin exercises séance 4
    },


  ], // fin sessions
}; // fin PROGRAM
