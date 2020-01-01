//import { CLARA_API_URL } from "./config";
import { LoremIpsum } from "lorem-ipsum";


export function contractsService() {
    const contracts = [
        {
            name: "mobilite",
            description: "Aides à la mobilité",
            icon: "mobilite",
        },
        {
            name: "orientation",
            description: "Aides à la définition du projet professionnel, à l'orientation, ou à la reconversion",
            icon: "orientation",
        },
        {
            name: "creation-entreprise",
            description: "Aides à la création ou reprise d'entreprise",
            icon: "creation-entreprise",
        },
        {
            name: "appui-embauche",
            description: "Appui à l'embauche",
            icon: "appui-embauche",
        },
        {
            name: "contrat-specifique",
            description: "Contrats spécifiques",
            icon: "contrat-specifique",
        },
        {
            name: "emploi-international",
            description: "Emplois  internationaux",
            icon: "emploi-international",
        },
        {
            name: "formation",
            description: "Dispositifs de formation, certification, obtention de diplôme",
            icon: "formation",
        },
        {
            name: "aide-regionale",
            description: "Aides régionales",
            icon: "aide-regionale",
        },
        {
            name: "senior",
            description: "Aides pour les séniors",
            icon: "senior",
        },
        {
            name: "alternance",
            description: "Aides pour l'alternance'",
            icon: "alternance",
        },
    ];

    return contracts;
}


export function filtersService() {

    const filters = [
        {
            name: "travailler-en-alternance",
            description: "Travailler en alternance",
            value: true
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
            value: true
        }
    ];

    return filters;

}

function fakeAidSummaryGenerator() {

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
    let allFilters = filtersService();
    let contracts = contractsService();
    var contract = contracts[Math.floor(Math.random() * contracts.length)].name;
    let random_filter = Math.floor(Math.random() * allFilters.length);
    var filters = [allFilters[random_filter], allFilters[random_filter - 1]];


    return {
        "name": name,
        "slug": slug,
        "short_description": short_description,
        "contract": contract,
        "filters": filters,
    }

}


export function aidsService(quantity) {

    let aidsArray = new Array(quantity);
    for (let i = 0; i < quantity; i++) {
        aidsArray[i] = fakeAidSummaryGenerator();
    }

    let aidsSortedByContract = {}
    contractsService().forEach(contract => {
        aidsSortedByContract[contract.name] = []
    });
    aidsArray.forEach(aid => {
        aidsSortedByContract[aid.contract].push(aid)
    });

    return aidsSortedByContract;


    // switch (resource) {
    //     case filters:

    //         break;

    //     case eligible:

    //         break;
    //     case nonEligible:

    //         break;

    //     default:
    //         break;
    // }


}