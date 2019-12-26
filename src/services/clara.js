import { CLARA_API_URL } from "./config";
import { LoremIpsum } from "lorem-ipsum";


const filters = [
    {
        name: "travailler-en-alternance",
        description: "Travailler en alternance",
        value: false
    },
    {
        name: "s-informer-sur-contrats-specifiques",
        description: "S'informer sur les contrats spécifiques",
        value: false
    },
    {
        name: "travailler-a-l-international",
        description: "Travailler en Europe ou à l'international",
        value: false
    },
    {
        name: "garder-enfant",
        description: "Faire garder son enfant",
        value: false
    },
    {
        name: "creer-entreprise",
        description: "Créer ou reprendre une entreprise",
        value: false
    },
    {
        name: "accompagne-recherche-emploi",
        description: "Être accompagné/e pour la recherche d'emploi",
        value: false
    },
    {
        name: "trouver-change-de-metier",
        description: "Trouver un métier, changer de métier",
        value: false
    },
    {
        name: "se-deplacer",
        description: "Se déplacer",
        value: false
    },
    {
        name: "aides-employeurs",
        description: "Connaître les aides au bénéfice des employeurs",
        value: false
    },
    {
        name: "se-former-valoriser-ses-competences",
        description: "Financer une formation, obtenir un diplôme",
        value: false
    }
];

function fakeAidSummaryGenerator(quantity) {

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 4,
            min: 2
        },
        wordsPerSentence: {
            max: 14,
            min: 6
        }
    });

    var name = lorem.generateWords(6);
    var slug = name.replace(" ", "-");
    var short_description = lorem.generateParagraphs(1);
    var filters = [];
    var min = 1;
    var max = 3;
    number_of_filters = Math.floor(Math.random() * (+max - +min)) + +min;




    return {}

}


export function ClaraService(resource, asker) {

    switch (resource) {
        case filters:

            break;

        case eligible:

            break;
        case nonEligible:

            break;

        default:
            break;
    }


}