var angular;
var battleBands = angular.module('battleBands', []);

var dictionary = ["a", "about", "above", "across", "act", "active", "activity", "add", "afraid", "after", "again", "age", "ago", "agree", "air", "all", "alone", "along", "already", "always", "am", "amount", "an", "and", "angry", "another", "answer", "any", "anyone", "anything", "anytime", "appear", "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask", "at", "attack", "aunt", "autumn", "away",
    "baby", "back", "bad", "bag", "ball", "bank", "base", "basket", "bath", "be", "bean", "bear", "beautiful", "bed", "bedroom", "beer", "behave", "before", "begin", "behind", "bell", "below", "besides", "best", "better", "between", "big", "bird", "birth", "birthday", "bit", "bite", "black", "bleed", "block", "blood", "blow", "blue", "board", "boat", "body", "boil", "bone", "book", "border", "born", "borrow", "both", "bottle", "bottom", "bowl", "box", "boy", "branch", "brave", "bread", "break", "breakfast", "breathe", "bridge", "bright", "bring", "brother", "brown", "brush", "build", "burn", "business", "bus", "busy", "but", "buy", "by",
    "cake", "call", "can", "candle", "cap", "car", "card", "care", "careful", "careless", "carry", "case", "cat", "catch", "central", "century", "certain", "chair", "chance", "change", "chase", "cheap", "cheese", "chicken", "child", "children", "chocolate", "choice", "choose", "circle", "city", "class", "clever", "clean", "clear", "climb", "clock", "cloth", "clothes", "cloud", "cloudy", "close", "coffee", "coat", "coin", "cold", "collect", "colour", "comb", "comfortable", "common", "compare", "come", "complete", "computer", "condition", "continue", "control", "cook", "cool", "copper", "corn", "corner", "correct", "cost", "contain", "count", "country", "course", "cover", "crash", "cross", "cry", "cup", "cupboard", "cut",
    "dance", "dangerous", "dark", "daughter", "day", "dead", "decide", "decrease", "deep", "deer", "depend", "desk", "destroy", "develop", "die", "different", "difficult", "dinner", "direction", "dirty", "discover", "dish", "do", "dog", "door", "double", "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", "duck", "dust", "duty",
    "each", "ear", "early", "earn", "earth", "east", "easy", "eat", "education", "effect", "egg", "eight", "either", "electric", "elephant", "else", "empty", "end", "enemy", "enjoy", "enough", "enter", "equal", "entrance", "escape", "even", "evening", "event", "ever", "every", "everyone", "exact", "everybody", "examination", "example", "except", "excited", "exercise", "expect", "expensive", "explain", "extremely", "eye",
    "face", "fact", "fail", "fall", "false", "family", "famous", "far", "farm", "father", "fast", "fat", "fault", "fear", "feed", "feel", "female", "fever", "few", "fight", "fill", "film", "find", "fine", "finger", "finish", "fire", "first", "fish", "fit", "five", "fix", "flag", "flat", "float", "floor", "flour", "flower", "fly", "fold", "food", "fool", "foot", "football", "for", "force", "foreign", "forest", "forget", "forgive", "fork", "form", "fox", "four", "free", "freedom", "freeze", "fresh", "friend", "friendly", "from", "front", "fruit", "full", "fun", "funny", "furniture", "further", "future",
    "game", "garden", "gate", "general", "gentleman", "get", "gift", "give", "glad", "glass", "go", "goat", "god", "gold", "good", "goodbye", "grandfather", "grandmother", "grass", "grave", "great", "green", "grey", "ground", "group", "grow", "gun",
    "hair", "half", "hall", "hammer", "hand", "happen", "happy", "hard", "hat", "hate", "have", "he", "head", "healthy", "hear", "heavy", "heart", "heaven", "height", "hello", "help", "hen", "her", "here", "hers", "hide", "high", "hill", "him", "his", "hit", "hobby", "hold", "hole", "holiday", "home", "hope", "horse", "hospital", "hot", "hotel", "house", "how", "hundred", "hungry", "hour", "hurry", "husband", "hurt",
    "I", "ice", "idea", "if", "important", "in", "increase", "inside", "into", "introduce", "invent", "iron", "invite", "is", "island", "it", "its",
    "jelly", "job", "join", "juice", "jump", "just",
    "keep", "key", "kill", "kind", "king", "kitchen", "knee", "knife", "knock", "know",
    "ladder", "lady", "lamp", "land", "large", "last", "late", "lately", "laugh", "lazy", "lead", "leaf", "learn", "leave", "leg", "left", "lend", "length", "less", "lesson", "let", "letter", "library", "lie", "life", "light", "like", "lion", "lip", "list", "listen", "little", "live", "lock", "lonely", "long", "look", "lose", "lot", "love", "low", "lower", "luck",
    "machine", "main", "make", "male", "man", "many", "map", "mark", "market", "marry", "matter", "may", "me", "meal", "mean", "measure", "meat", "medicine", "meet", "member", "mention", "method", "middle", "milk", "million", "mind", "minute", "miss", "mistake", "mix", "model", "modern", "moment", "money", "monkey", "month", "moon", "more", "morning", "most", "mother", "mountain", "mouth", "move", "much", "music", "must", "my",
    "name", "narrow", "nation", "nature", "near", "nearly", "neck", "need", "needle", "neighbour", "neither", "net", "never", "new", "news", "newspaper", "next", "nice", "night", "nine", "no", "noble", "noise", "none", "nor", "north", "nose", "not", "nothing", "notice", "now", "number",
    "obey", "object", "ocean", "of", "off", "offer", "office", "often", "oil", "old", "on", "one", "only", "open", "opposite", "or", "orange", "order", "other", "our", "out", "outside", "over", "own",
    "page", "pain", "paint", "pair", "pan", "paper", "parent", "park", "part", "partner", "party", "pass", "past", "path", "pay", "peace", "pen", "pencil", "people", "pepper", "per", "perfect", "period", "person", "petrol", "photograph", "piano", "pick", "picture", "piece", "pig", "pin", "pink", "place", "plane", "plant", "plastic", "plate", "play", "please", "pleased", "plenty", "pocket", "point", "poison", "police", "polite", "pool", "poor", "popular", "position", "possible", "potato", "pour", "power", "present", "press", "pretty", "prevent", "price", "prince", "prison", "private", "prize", "probably", "problem", "produce", "promise", "proper", "protect", "provide", "public", "pull", "punish", "pupil", "push", "put",
    "queen", "question", "quick", "quiet", "quite",
    "radio", "rain", "rainy", "raise", "reach", "read", "ready", "real", "really", "receive", "record", "red", "remember", "remind", "remove", "rent", "repair", "repeat", "reply", "report", "rest", "restaurant", "result", "return", "rice", "rich", "ride", "right", "ring", "rise", "road", "rob", "rock", "room", "round", "rubber", "rude", "rule", "ruler", "run", "rush",
    "sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school", "science", "scissors", "search", "seat", "second", "see", "seem", "sell", "send", "sentence", "serve", "seven", "several", "sex", "shade", "shadow", "shake", "shape", "share", "sharp", "she", "sheep", "sheet", "shelf", "shine", "ship", "shirt", "shoe", "shoot", "shop", "short", "should", "shoulder", "shout", "show", "sick", "side", "signal", "silence", "silly", "silver", "similar", "simple", "single", "since", "sing", "sink", "sister", "sit", "six", "size", "skill", "skin", "skirt", "sky", "sleep", "slip", "slow", "small", "smell", "smile", "smoke", "snow", "so", "soap", "sock", "soft", "some", "someone", "something", "sometimes", "son", "soon", "sorry", "sound", "soup", "south", "space", "speak", "special", "speed", "spell", "spend", "spoon", "sport", "spread", "spring", "square", "stamp", "stand", "star", "start", "station", "stay", "steal", "steam", "step", "still", "stomach", "stone", "stop", "store", "storm", "story", "strange", "street", "strong", "structure", "student", "study", "stupid", "subject", "substance", "successful", "such", "sudden", "sugar", "suitable", "summer", "sun", "sunny", "support", "sure", "surprise", "sweet", "swim", "sword",
    "table", "take", "talk", "tall", "taste", "taxi", "tea", "teach", "team", "tear", "telephone", "television", "tell", "ten", "tennis", "terrible", "test", "than", "that", "the", "their", "then", "there", "therefore", "these", "thick", "thin", "thing", "think", "third", "this", "though", "threat", "three", "tidy", "tie", "title", "to", "today", "toe", "together", "tomorrow", "tonight", "too", "tool", "tooth", "top", "total", "touch", "town", "train", "tram", "travel", "tree", "trouble", "true", "trust", "twice", "try", "turn", "type",
    "ugly", "uncle", "under", "understand", "unit", "until", "up", "use", "useful", "usual", "usually",
    "vegetable", "very", "village", "voice", "visit",
    "wait", "wake", "walk", "want", "warm", "was", "wash", "waste", "watch", "water", "way", "we", "weak", "wear", "weather", "wedding", "week", "weight", "welcome", "were", "well", "west", "wet", "what", "wheel", "when", "where", "which", "while", "white", "who", "why", "wide", "wife", "wild", "will", "win", "wind", "window", "wine", "winter", "wire", "wise", "wish", "with", "without", "woman", "wonder", "word", "work", "world", "worry",
    "yard", "yell", "yesterday", "yet", "you", "young", "your",
    "zero", "zoo"]

var GetBonus = (eq: IMusicEquipment): number => {
    return eq.quality * eq.condition / 100;
}

var GetCityDistance = (a: City, b: City): number => {
    if (a && b) {
        var x = a.top - b.top;
        var y = a.left - b.left;
        return Math.floor(Math.sqrt(x * x + y * y) * 4.92);
    }

    return 0;
}

var GetGasCost = (dist: number, car: IVehicle): number => {
    return 3 * dist / car.mpg;
}

var GetDrivingTime = (dist: number, car: IVehicle): number => {
    return dist / 65;
}

var GetSalePrice = (item: IMusicEquipment): number => {
    return item.cost * (item.condition / 100) * (item.quality / 100);
}

interface ISong {
    name: string;
    quality: number;
}

interface IRecord {
    songs: ISong[];
    popularity: number;
    reviews: number;
    releaseDate: Date;
}

class Song {
    idea: SongIdea;
    recording: SongRecording;
    Album: Album;
}

class SongIdea {
    name: string;
    quality: number; // 0 - 100. like "rarity"
    length: number; // time in minutes
    genre: any;
    intensity: number; //radio k 0-10 scales here
    speed: number;
}

class SongRecording {
    recordingQuality: number;
    recordingPopularity: number;
}

class Album {
    name: string;
    songs: SongRecording[];
    overallQuality: () => number;
    overallPopularity: () => number;
}

interface IPerformanceSlot {
    name: string;
    typicalDrawPercent: number;
    unlocked: boolean;
    minDrawExpected: number;
    paymentFlat: number;
    paymentPercent: number;
    minSongs: number;
    maxSongs: number;
}

class OpenMic implements IPerformanceSlot {
    name = "Open Mic";
    typicalDrawPercent = .5;
    minSongs = 1;
    maxSongs = 2;
    unlocked = true;
    minDrawExpected = 0;
    paymentFlat = 0;
    paymentPercent = 0;
}

class BarOpener implements IPerformanceSlot {
    name = "Opener";
    typicalDrawPercent = .33;
    minSongs = 3;
    maxSongs = 5;
    unlocked = false;
    minDrawExpected = 10;
    paymentFlat = 10;
    paymentPercent = .05; //percent of bar. lets say ticket is like $5
}

class BarHeadliner implements IPerformanceSlot {
    name = "Headliner";
    typicalDrawPercent = .5;
    minSongs = 5;
    maxSongs = 7;
    unlocked = false;
    minDrawExpected = 15;
    paymentFlat = 20;
    paymentPercent = .1; //percent of bar? or say ticket is like $5
}

interface IVenue {
    name: string;
    relationship: number;
    capacity: number;
    minTicketPrice: number;
    maxTicketPrice: number; //maybe more of a range
    performanceSlots: IPerformanceSlot[];
    typicalGenre: any;
}

class CoffeeShop implements IVenue {
    name = "The Coffee Hedge";
    relationship = 0;
    capacity = 20;
    minTicketPrice = 0;
    maxTicketPrice = 0;
    performanceSlots = [new OpenMic()];
    typicalGenre = "Acoustic";
}

class City {
    name: string;
    top: number;
    left: number;
    width: number;
    fans: number;
    fansForShow: number;
    venues: IVenue[];

    constructor(n, t, l, w = 20, venues = []) {
        this.name = n;
        this.top = t;
        this.left = l;
        this.width = w;
        this.fans = 0;
        this.fansForShow = 0;
        this.venues = venues;
    }
}

interface IVehicle {
    storage: number;
    seats: number;
    mpg: number;
    mileage: number;
    cost: number;
}

class HatchBack implements IVehicle {
    storage = 20;
    seats = 5;
    mpg = 30;
    cost = 10000;
    mileage = 0;
}

class OldSedan implements IVehicle {
    storage = 30;
    seats = 5;
    mpg = 30;
    mileage = 100000;
    cost = 3000;
}

class OldVan implements IVehicle {
    storage = 100;
    seats = 6;
    mpg = 25;
    mileage = 100000;
    cost = 5000;
}

enum InstrumentSlot {
    Vocals,
    Guitar,
    Bass,
    Drums,
    Piano,
    Synth,

    // more instruments?
    Sax,
    Trumpet,
    Trombone,
    Cello,
    Violin,
    Triangle,

}

interface IMusicEquipment {
    type: InstrumentSlot;
    name: string;
    acoustic: boolean; // whether it is acoustic or not
    electric: boolean;
    quality: number;
    cost: number;
    condition: number;
    size: number;
}

class BeginnerAcousticGuitar implements IMusicEquipment {
    type = InstrumentSlot.Guitar;
    name = "BeginnerAcousticGuitar";
    acoustic = true;
    electric = false;
    quality = 10;
    cost = 100;
    condition = 100;
    size = 5;
}

class MartinAcousticGuitar implements IMusicEquipment {
    type = InstrumentSlot.Guitar;
    name = "MartinAcousticGuitar";
    acoustic = true;
    electric = false;
    quality = 60;
    cost = 700;
    condition = 100;
    size = 5;
}

class CustomAcousticGuitar implements IMusicEquipment {
    type = InstrumentSlot.Guitar;
    name = "CustomAcousticGuitar";
    acoustic = true;
    electric = true;
    quality = 80;
    cost = 1500;
    condition = 100;
    size = 5;
}

class SquierStrat implements IMusicEquipment {
    type = InstrumentSlot.Guitar;
    name = "SquierStrat";
    acoustic = false;
    electric = true;
    quality = 10;
    cost = 150;
    condition = 100;
    size = 4;
}

class MexicanStrat implements IMusicEquipment {
    type = InstrumentSlot.Guitar;
    name = "MexicanStrat";
    acoustic = false;
    electric = true;
    quality = 20;
    cost = 250;
    condition = 100;
    size = 4;
}

class AmericanStrat implements IMusicEquipment {
    type = InstrumentSlot.Guitar;
    name = "AmericanStrat";
    acoustic = false;
    electric = true;
    quality = 40;
    cost = 1000;
    condition = 100;
    size = 5;
}

class CustomStrat implements IMusicEquipment {
    type = InstrumentSlot.Guitar;
    name = "CustomStrat";
    acoustic = false;
    electric = true;
    quality = 50;
    cost = 2000;
    condition = 100;
    size = 4;
}

class VintageStrat implements IMusicEquipment {
    type = InstrumentSlot.Guitar;
    name = "VintageStrat";
    acoustic = false;
    electric = true;
    quality = 60;
    cost = 3000;
    condition = 100;
    size = 4;
}

class DrumKit implements IMusicEquipment {
    type = InstrumentSlot.Drums;
    name = "DrumKit";
    acoustic = true;
    electric = false;
    quality = 40;
    cost = 700;
    condition = 100;
    size = 15;
}

class BassGuitar implements IMusicEquipment {
    type = InstrumentSlot.Bass;
    name = "BassGuitar";
    acoustic = false;
    electric = true;
    quality = 40;
    cost = 400;
    condition = 100;
    size = 5;
}

// QUALITIES:
// 100 = God-tier. Legendary. Probably dead at 27. 
// 90+ = AMAZING. Provides a large bonus to sound
// 80+ = Really good professional. good bonus
// 70+ = touring professional. decent bonus.
// 60+ = solid. some bonus.
// 50+ = above average musician. how did you get that tone? small bonus
// 40+ = decent musician. little to no bonus.
// 30+ = ok amateur. little to no minus.
// 20+ = learning amateur. small minus.
// 10+ = bad karaoke. pretty big minus.
// 0+  = get off the stage. lord help us minus.

interface IMusician {
    name: string;
    skill: number[]; //indexed by instrument
    equipment: IMusicEquipment[];
}

class SingerSongwriter implements IMusician {
    name = "Claire";
    skill = [25, 25];
    equipment = [new BeginnerAcousticGuitar()];
}

class Guitarist implements IMusician {
    name = "Greg";
    skill = [0, 35];
    equipment = [new SquierStrat()];
}

class Bassist implements IMusician {
    name = "Sam";
    skill = [0, 0, 35];
    equipment = [new SquierStrat()];
}

class Drummer implements IMusician {
    name = "Tu";
    skill = [0, 0, 0, 35];
    equipment = [new SquierStrat()];
}

class Band {
    public currentLeft: number;
    public currentTop: number;

    public money: number;
    public fans: number;
    public buzz: number;
    public name: string;

    public members: IMusician[];
    public vehicle: IVehicle;
    public backline: IMusicEquipment[]; // stuff you own but don't have with you

    public songCatalog: Song[];
    public discography: IRecord[];

    constructor() {
        this.money = 1000;
        this.fans = 1;
        this.buzz = 0;
        this.name = "Johnny Nobody";
        this.vehicle = new OldSedan();
        this.members = [];
        this.members.push(new SingerSongwriter());
        this.backline = [];
        this.songCatalog = [];
        this.discography = [];
    }

    public searchForMembers(count: number): IMusician {
        return null;
    }

    public writeSong(count: number): Song[] {
        var result = [];
        for (var i = 0; i < count; i++) {
            var s = new Song();
            s.idea = new SongIdea();
            s.idea.name = PickRandomWords();
            s.idea.quality = quadRandom(0, 100);
            s.idea.intensity = flatRandomInt(0, 10);
            s.idea.speed = flatRandomInt(0, 10);
            s.idea.length = doubleRandom(2, 10);
            result.push(s);
        }

        return result;
    }
}

var quadRandomInt = (min: number, max: number): number => {
    return Math.floor(quadRandom(min, max));
}

var doubleRandomInt = (min: number, max: number): number => {
    return Math.floor(doubleRandom(min, max));
}

var flatRandomInt = (min: number, max: number): number => {
    return Math.floor(flatRandom(min, max));
}

var quadRandom = (min: number, max: number): number => {
    return (Math.random() * Math.random() * Math.random() * Math.random() * (max - min)) + min;
}

var doubleRandom = (min: number, max: number): number => {
    return (Math.random() * Math.random() * (max - min)) + min;
}

var flatRandom = (min: number, max: number): number => {
    return (Math.random() * (max - min)) + min
}

var PickRandomWords = (): string => {
    var length = flatRandomInt(1, 5);
    var result = "";
    for (var i = 0; i < length; i++) {
        if (i > 0) {
            result += " ";
        }
        result += PickRandomWord();
    }
    return result;
}

var PickRandomWord = (): string => {
    var x = flatRandomInt(0, 1000);
    return dictionary[x];
}

interface GameScope {
    band: Band;
    cities: City[];
    InstrumentSlot: any;
    cityClick: (x) => void;
    currentCity: City;
    selectedCity: City;
    GetCityDistance: (a: City, b: City) => number;
    GetGasCost: (a: number, b: IVehicle) => number;
    GetSalePrice: any;
    GetDrivingTime: any;
    unequip: any;
    sell: any;
    drive: any;
    writeSong: any;
    lookForMembers: any;
    SongOptions: Song[];
    PickSong: any;
}

enum GameState {
    MainCity,
    Concert,
    Tour,
    Studio
}

battleBands.controller('GameController', ['$scope', ($scope: GameScope) => {
    $scope.writeSong = () => {
        $scope.SongOptions = $scope.band.writeSong(3);
    }
    $scope.PickSong = (song: Song) => {
        $scope.band.songCatalog.push(song);
        $scope.SongOptions = null;
    }
    $scope.lookForMembers = () => {
        var options = $scope.band.searchForMembers(3);
    }

    $scope.GetCityDistance = GetCityDistance;
    $scope.GetDrivingTime = GetDrivingTime;
    $scope.GetGasCost = GetGasCost;
    $scope.GetSalePrice = GetSalePrice;
    $scope.InstrumentSlot = InstrumentSlot;
    $scope.band = new Band();
    $scope.band.vehicle = new OldVan();
    $scope.band.currentLeft = 60;
    $scope.band.currentTop = 30;

    $scope.cities = [
        new City("Seattle", 40, 70, 25, [new CoffeeShop()]),
        new City("Portland", 70, 60),
        new City("Missoula", 75, 180, 15),
        new City("San Fransisco", 195, 35),
        new City("LA", 270, 65, 30),
        new City("Austin", 370, 330, 25),
        new City("Dallas", 325, 345),
        new City("Chicago", 170, 450, 25),
        new City("Columbus", 195, 515),
        new City("New York", 160, 620, 30),
        new City("Boston", 135, 650, 25),
        new City("Philadelphia", 185, 605),
        new City("Atlanta", 305, 510),
        new City("Nashville", 265, 475),
        new City("New Orleans", 370, 420),
        new City("Jacksonville", 360, 555),
        new City("Minneapolis", 120, 390),
        new City("Denver", 205, 245),
        new City("Phoenix", 300, 145)
    ];

    $scope.currentCity = $scope.cities[0];

    $scope.selectedCity = null;

    $scope.cityClick = (city: City) => {
        $scope.selectedCity = city;
    }

    $scope.unequip = (member: IMusician, eq: IMusicEquipment) => {
        var index = member.equipment.indexOf(eq);
        if (index >= 0) {
            $scope.band.backline.push(member.equipment.splice(index, 1)[0]);
        }
    }

    $scope.sell = (member: IMusician, eq: IMusicEquipment) => {
        if (member) {
            var index = member.equipment.indexOf(eq);
            if (index >= 0) {
                var item = member.equipment.splice(index, 1)[0];
                $scope.band.money += GetSalePrice(item);
            }
        }
        else {
            var index = $scope.band.backline.indexOf(eq);
            if (index >= 0) {
                var item = $scope.band.backline.splice(index, 1)[0];
                $scope.band.money += GetSalePrice(item);
            }
        }
    }

    $scope.drive = () => {
        var distance = GetCityDistance($scope.currentCity, $scope.selectedCity);
        if (distance > 0) {
            var cost = GetGasCost(distance, $scope.band.vehicle);
            if (cost < $scope.band.money) {
                $scope.band.money -= cost;
                $scope.band.vehicle.mileage += distance;
                $scope.currentCity = $scope.selectedCity;
            }
            else {
                window.alert("Not enough money!");
                return;
            }
        }
    }
}]);