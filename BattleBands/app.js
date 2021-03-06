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
    "zero", "zoo"];
var GetBonus = function (eq) {
    return eq.quality * eq.condition / 100;
};
var GetCityDistance = function (a, b) {
    if (a && b) {
        var x = a.top - b.top;
        var y = a.left - b.left;
        return Math.floor(Math.sqrt(x * x + y * y) * 4.92);
    }
    return 0;
};
var GetGasCost = function (dist, car) {
    return 3 * dist / car.mpg;
};
var GetDrivingTime = function (dist, car) {
    return dist / 65;
};
var GetSalePrice = function (item) {
    return item.cost * (item.condition / 100) * (item.quality / 100);
};
var Song = (function () {
    function Song() {
    }
    return Song;
})();
var SongIdea = (function () {
    function SongIdea() {
    }
    return SongIdea;
})();
var SongRecording = (function () {
    function SongRecording() {
    }
    return SongRecording;
})();
var Album = (function () {
    function Album() {
    }
    return Album;
})();
var OpenMic = (function () {
    function OpenMic() {
        this.name = "Open Mic";
        this.typicalDrawPercent = .5;
        this.minSongs = 1;
        this.maxSongs = 2;
        this.unlocked = true;
        this.minDrawExpected = 0;
        this.paymentFlat = 0;
        this.paymentPercent = 0;
    }
    return OpenMic;
})();
var BarOpener = (function () {
    function BarOpener() {
        this.name = "Opener";
        this.typicalDrawPercent = .33;
        this.minSongs = 3;
        this.maxSongs = 5;
        this.unlocked = false;
        this.minDrawExpected = 10;
        this.paymentFlat = 10;
        this.paymentPercent = .05; //percent of bar. lets say ticket is like $5
    }
    return BarOpener;
})();
var BarHeadliner = (function () {
    function BarHeadliner() {
        this.name = "Headliner";
        this.typicalDrawPercent = .5;
        this.minSongs = 5;
        this.maxSongs = 7;
        this.unlocked = false;
        this.minDrawExpected = 15;
        this.paymentFlat = 20;
        this.paymentPercent = .1; //percent of bar? or say ticket is like $5
    }
    return BarHeadliner;
})();
var CoffeeShop = (function () {
    function CoffeeShop() {
        this.name = "The Coffee Hedge";
        this.stageSlots = 2;
        this.drinkTickets = 0;
        this.relationship = 0;
        this.capacity = 20;
        this.minTicketPrice = 0;
        this.maxTicketPrice = 0;
        this.performanceSlots = [new OpenMic()];
        this.typicalGenre = MoveType.Musical;
    }
    return CoffeeShop;
})();
var City = (function () {
    function City(n, t, l, w, venues) {
        if (w === void 0) { w = 20; }
        if (venues === void 0) { venues = []; }
        this.name = n;
        this.top = t;
        this.left = l;
        this.width = w;
        this.fans = 0;
        this.fansForShow = 0;
        this.venues = venues;
    }
    return City;
})();
var HatchBack = (function () {
    function HatchBack() {
        this.storage = 20;
        this.seats = 5;
        this.mpg = 30;
        this.cost = 10000;
        this.mileage = 0;
    }
    return HatchBack;
})();
var OldSedan = (function () {
    function OldSedan() {
        this.storage = 30;
        this.seats = 5;
        this.mpg = 30;
        this.mileage = 100000;
        this.cost = 3000;
    }
    return OldSedan;
})();
var OldVan = (function () {
    function OldVan() {
        this.storage = 100;
        this.seats = 6;
        this.mpg = 25;
        this.mileage = 100000;
        this.cost = 5000;
    }
    return OldVan;
})();
var InstrumentSlot;
(function (InstrumentSlot) {
    InstrumentSlot[InstrumentSlot["Vocals"] = 0] = "Vocals";
    InstrumentSlot[InstrumentSlot["Guitar"] = 1] = "Guitar";
    InstrumentSlot[InstrumentSlot["Bass"] = 2] = "Bass";
    InstrumentSlot[InstrumentSlot["Drums"] = 3] = "Drums";
    InstrumentSlot[InstrumentSlot["Piano"] = 4] = "Piano";
    InstrumentSlot[InstrumentSlot["Synth"] = 5] = "Synth";
    // more instruments?
    InstrumentSlot[InstrumentSlot["Sax"] = 6] = "Sax";
    InstrumentSlot[InstrumentSlot["Trumpet"] = 7] = "Trumpet";
    InstrumentSlot[InstrumentSlot["Trombone"] = 8] = "Trombone";
    InstrumentSlot[InstrumentSlot["Cello"] = 9] = "Cello";
    InstrumentSlot[InstrumentSlot["Violin"] = 10] = "Violin";
    InstrumentSlot[InstrumentSlot["Triangle"] = 11] = "Triangle";
})(InstrumentSlot || (InstrumentSlot = {}));
var BeginnerAcousticGuitar = (function () {
    function BeginnerAcousticGuitar() {
        this.type = InstrumentSlot.Guitar;
        this.name = "BeginnerAcousticGuitar";
        this.acoustic = true;
        this.electric = false;
        this.quality = 10;
        this.cost = 100;
        this.condition = 100;
        this.size = 5;
    }
    return BeginnerAcousticGuitar;
})();
var MartinAcousticGuitar = (function () {
    function MartinAcousticGuitar() {
        this.type = InstrumentSlot.Guitar;
        this.name = "MartinAcousticGuitar";
        this.acoustic = true;
        this.electric = false;
        this.quality = 60;
        this.cost = 700;
        this.condition = 100;
        this.size = 5;
    }
    return MartinAcousticGuitar;
})();
var CustomAcousticGuitar = (function () {
    function CustomAcousticGuitar() {
        this.type = InstrumentSlot.Guitar;
        this.name = "CustomAcousticGuitar";
        this.acoustic = true;
        this.electric = true;
        this.quality = 80;
        this.cost = 1500;
        this.condition = 100;
        this.size = 5;
    }
    return CustomAcousticGuitar;
})();
var SquierStrat = (function () {
    function SquierStrat() {
        this.type = InstrumentSlot.Guitar;
        this.name = "SquierStrat";
        this.acoustic = false;
        this.electric = true;
        this.quality = 10;
        this.cost = 150;
        this.condition = 100;
        this.size = 4;
    }
    return SquierStrat;
})();
var MexicanStrat = (function () {
    function MexicanStrat() {
        this.type = InstrumentSlot.Guitar;
        this.name = "MexicanStrat";
        this.acoustic = false;
        this.electric = true;
        this.quality = 20;
        this.cost = 250;
        this.condition = 100;
        this.size = 4;
    }
    return MexicanStrat;
})();
var AmericanStrat = (function () {
    function AmericanStrat() {
        this.type = InstrumentSlot.Guitar;
        this.name = "AmericanStrat";
        this.acoustic = false;
        this.electric = true;
        this.quality = 40;
        this.cost = 1000;
        this.condition = 100;
        this.size = 5;
    }
    return AmericanStrat;
})();
var CustomStrat = (function () {
    function CustomStrat() {
        this.type = InstrumentSlot.Guitar;
        this.name = "CustomStrat";
        this.acoustic = false;
        this.electric = true;
        this.quality = 50;
        this.cost = 2000;
        this.condition = 100;
        this.size = 4;
    }
    return CustomStrat;
})();
var VintageStrat = (function () {
    function VintageStrat() {
        this.type = InstrumentSlot.Guitar;
        this.name = "VintageStrat";
        this.acoustic = false;
        this.electric = true;
        this.quality = 60;
        this.cost = 3000;
        this.condition = 100;
        this.size = 4;
    }
    return VintageStrat;
})();
var DrumKit = (function () {
    function DrumKit() {
        this.type = InstrumentSlot.Drums;
        this.name = "DrumKit";
        this.acoustic = true;
        this.electric = false;
        this.quality = 40;
        this.cost = 700;
        this.condition = 100;
        this.size = 15;
    }
    return DrumKit;
})();
var BassGuitar = (function () {
    function BassGuitar() {
        this.type = InstrumentSlot.Bass;
        this.name = "BassGuitar";
        this.acoustic = false;
        this.electric = true;
        this.quality = 40;
        this.cost = 400;
        this.condition = 100;
        this.size = 5;
    }
    return BassGuitar;
})();
var MoveType;
(function (MoveType) {
    MoveType[MoveType["None"] = 0] = "None";
    MoveType[MoveType["Musical"] = 1] = "Musical";
    MoveType[MoveType["Technical"] = 2] = "Technical";
    MoveType[MoveType["Style"] = 3] = "Style";
    MoveType[MoveType["StagePresence"] = 4] = "StagePresence"; // this is like stage dives or crowd involvement
})(MoveType || (MoveType = {}));
var BasicConcertGoer = (function () {
    function BasicConcertGoer() {
        this.prefferedMoves = MoveType.None;
        this.currentEngagement = flatRandom(0, 20);
        this.favoriteSongs = [];
    }
    return BasicConcertGoer;
})();
var Concert = (function () {
    function Concert(venue, slot, city, musicians) {
        this.songsPlayed = 0;
        this.crowd = [];
        this.musicians = musicians;
        this.setlist = [];
        this.currentSong = null;
        this.maxSetLength = slot.maxSongs;
        this.minSetLength = slot.minSongs;
        // current metrics
        this.metrics = [];
        for (var i = 0; i < 5; i++) {
            this.metrics[i] = 50;
        }
        //indirect metrics
        this.energry = 50;
        this.volume = 50;
        this.variety = 50;
        this.recognition = 0;
        this.newMusic = 0;
        //merch
        this.startingMerch = 0;
        this.merchSold = 0;
        // tickets/payment
        this.ticketPrice = flatRandomInt(venue.minTicketPrice, venue.maxTicketPrice);
        var venueCrowd = Math.floor(venue.capacity * slot.typicalDrawPercent * Math.random()) + 2;
        var bandDrawFans = doubleRandomInt(0, city.fans);
        var bandDrawExcitedFans = flatRandomInt(0, city.fansForShow);
        console.debug("venue drew", venueCrowd);
        console.debug("band drew", bandDrawFans);
        console.debug("band drew big", bandDrawExcitedFans);
        this.ticketsSold = Math.min(venueCrowd + bandDrawFans + bandDrawExcitedFans, venue.capacity);
        this.barSales = 0;
        if (this.ticketsSold == venue.capacity) {
            console.log("you sold out the venue!");
        }
        for (var i = 0; i < this.ticketsSold; i++) {
            this.crowd.push(new BasicConcertGoer());
        }
        this.payout = slot.paymentFlat + slot.paymentPercent * this.ticketPrice * this.ticketsSold;
        // current song setup
        this.currentSong = null;
        this.currentPlace = 0;
        this.currentMusician = 0;
    }
    Concert.prototype.playMove = function (musician, move) {
        musician.energy -= move.energyCost;
        // have to handle the familiarity of the song
        var skillBonus = Math.sqrt(musician.skill[musician.equipment[0].type]);
        var roll = flatRandom(0, 10);
        var difficulty = move.difficulty;
        console.log("skill:" + skillBonus + "/roll:" + roll + "/difficulty:" + difficulty);
        if (roll < skillBonus) {
            console.log("Success!");
            //success!
            this.metrics[move.type] += move.damage;
        }
        else {
            console.log("Fail...");
            this.metrics[move.type] *= .9;
        }
        this.currentMusician++;
        if (this.currentMusician >= this.musicians.length) {
            this.currentMusician = 0;
            this.currentPlace++;
            // recover an energy per minute
            this.musicians.forEach(function (musician) {
                musician.energy++;
            });
        }
        if (this.currentPlace > this.currentSong.idea.length) {
            this.currentSong = null;
            this.songsPlayed++;
        }
    };
    Concert.prototype.playSong = function (song) {
        if (!this.currentSong || this.currentPlace > this.currentSong.idea.length) {
            this.setlist.push(song);
            this.currentSong = song;
            this.currentPlace = 0;
        }
        else {
            alert("The current song is not done!");
        }
    };
    Concert.prototype.metricName = function (metric) {
        return MoveType[metric];
    };
    return Concert;
})();
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
var EffectType;
(function (EffectType) {
    // Positive status effects
    EffectType[EffectType["Harmony"] = 0] = "Harmony";
    // Bad status effects
    EffectType[EffectType["Injured"] = 1] = "Injured";
    EffectType[EffectType["Disonnance"] = 2] = "Disonnance";
})(EffectType || (EffectType = {}));
var EffectLocality;
(function (EffectLocality) {
    EffectLocality[EffectLocality["Local"] = 0] = "Local";
    EffectLocality[EffectLocality["Party"] = 1] = "Party"; // affects everyone in the band
})(EffectLocality || (EffectLocality = {}));
var Harmony = (function () {
    function Harmony(length, strength) {
        this.name = "Harmony";
        this.description = "Boost the next successful music move";
        this.type = EffectType.Harmony;
        this.locality = EffectLocality.Party;
        this.length = length;
        this.strength = strength;
    }
    return Harmony;
})();
var PlayNote = (function () {
    function PlayNote() {
        this.name = "Play";
        this.type = MoveType.Musical;
        this.energyCost = 1;
        this.difficulty = 1;
        this.damage = 1;
    }
    return PlayNote;
})();
var Solo = (function () {
    function Solo() {
        this.name = "Solo";
        this.type = MoveType.Musical;
        this.energyCost = 2;
        this.difficulty = 2;
        this.damage = 3;
    }
    return Solo;
})();
var Shred = (function () {
    function Shred() {
        this.name = "Shred";
        this.type = MoveType.Technical;
        this.energyCost = 3;
        this.difficulty = 3;
        this.damage = 5;
    }
    return Shred;
})();
var Harmonize = (function () {
    function Harmonize() {
        this.name = "Harmonize";
        this.type = MoveType.Musical;
        this.energyCost = 2;
        this.difficulty = 2;
        this.damage = 1;
        this.effect = new Harmony(2, 1);
    }
    return Harmonize;
})();
var TalkToCrowd = (function () {
    function TalkToCrowd() {
        this.name = "Talk to the crowd";
        this.type = MoveType.StagePresence;
        this.energyCost = 1;
        this.difficulty = 2;
        this.damage = 1;
    }
    return TalkToCrowd;
})();
var SingerSongwriter = (function () {
    function SingerSongwriter() {
        this.name = "Claire";
        this.skill = [25, 25];
        this.fatigue = 0;
        this.energy = 3;
        this.equipment = [new BeginnerAcousticGuitar()];
        this.moves = [new PlayNote(), new TalkToCrowd()];
    }
    return SingerSongwriter;
})();
var Guitarist = (function () {
    function Guitarist() {
        this.name = "Greg";
        this.skill = [0, 35];
        this.fatigue = 0;
        this.energy = 3;
        this.equipment = [new SquierStrat()];
        this.moves = [new PlayNote(), new Solo()];
    }
    return Guitarist;
})();
var Bassist = (function () {
    function Bassist() {
        this.name = "Sam";
        this.skill = [0, 0, 35];
        this.fatigue = 0;
        this.energy = 3;
        this.equipment = [new SquierStrat()];
        this.moves = [new PlayNote(), new Harmonize()];
    }
    return Bassist;
})();
var Drummer = (function () {
    function Drummer() {
        this.name = "Tu";
        this.skill = [0, 0, 0, 35];
        this.fatigue = 0;
        this.energy = 3;
        this.equipment = [new SquierStrat()];
        this.moves = [new PlayNote(), new Solo()];
    }
    return Drummer;
})();
var Band = (function () {
    function Band() {
        this.currentDay = 0;
        this.currentTime = 0;
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
    Band.prototype.searchForMembers = function (count) {
        this.UpdateTime();
        return null;
    };
    // Every Action is 4 hours for simplicity.
    Band.prototype.UpdateTime = function () {
        this.currentTime++;
        if (this.currentTime > 5) {
            this.currentTime = 0;
            this.currentDay++;
        }
    };
    Band.prototype.Sleep = function () {
        this.currentDay++;
        this.currentTime = 0; // 8 am
    };
    Band.prototype.WorkPartTime = function () {
        this.UpdateTime();
        this.money += 4 * 10;
    };
    Band.prototype.WorkFullTime = function () {
        if (this.currentTime != 0) {
            alert("You're late! This is a real job. You have to start work at 8AM sharp!");
            return;
        }
        this.UpdateTime();
        this.UpdateTime();
        this.money += 8 * 15;
    };
    Band.prototype.writeSong = function (count) {
        this.UpdateTime();
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
    };
    return Band;
})();
var quadRandomInt = function (min, max) {
    return Math.floor(quadRandom(min, max));
};
var doubleRandomInt = function (min, max) {
    return Math.floor(doubleRandom(min, max));
};
var flatRandomInt = function (min, max) {
    return Math.floor(flatRandom(min, max));
};
var quadRandom = function (min, max) {
    return (Math.random() * Math.random() * Math.random() * Math.random() * (max - min)) + min;
};
var doubleRandom = function (min, max) {
    return (Math.random() * Math.random() * (max - min)) + min;
};
var flatRandom = function (min, max) {
    return (Math.random() * (max - min)) + min;
};
var PickRandomWords = function () {
    var length = flatRandomInt(1, 5);
    var result = "";
    for (var i = 0; i < length; i++) {
        if (i > 0) {
            result += " ";
        }
        result += PickRandomWord();
    }
    return result;
};
var PickRandomWord = function () {
    var x = flatRandomInt(0, 1000);
    return dictionary[x];
};
var GameState;
(function (GameState) {
    GameState[GameState["MainCity"] = 0] = "MainCity";
    GameState[GameState["Concert"] = 1] = "Concert";
    GameState[GameState["Tour"] = 2] = "Tour";
    GameState[GameState["Studio"] = 3] = "Studio";
})(GameState || (GameState = {}));
battleBands.controller('GameController', ['$scope', function ($scope) {
        $scope.GameState = GameState;
        $scope.CurrentGameState = GameState.MainCity;
        $scope.PlayShow = function (venue, slot) {
            //TODO: check if the venue is ope
            $scope.CurrentGameState = GameState.Concert;
            $scope.concert = new Concert(venue, slot, $scope.currentCity, $scope.band.members);
        };
        $scope.writeSong = function () {
            $scope.SongOptions = $scope.band.writeSong(3);
        };
        $scope.PickSong = function (song) {
            $scope.band.songCatalog.push(song);
            $scope.SongOptions = null;
        };
        $scope.lookForMembers = function () {
            var options = $scope.band.searchForMembers(3);
        };
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
        $scope.cityClick = function (city) {
            $scope.selectedCity = city;
        };
        $scope.endShow = function (concert) {
            $scope.band.money += concert.payout;
            $scope.concert = null;
            $scope.CurrentGameState = GameState.MainCity;
            $scope.band.currentTime = 0;
            $scope.band.currentDay++;
            //TODO: add grading and fan handling and stuff
        };
        $scope.unequip = function (member, eq) {
            var index = member.equipment.indexOf(eq);
            if (index >= 0) {
                $scope.band.backline.push(member.equipment.splice(index, 1)[0]);
            }
        };
        $scope.sell = function (member, eq) {
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
        };
        $scope.drive = function () {
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
        };
        $scope.deleteSong = function (song) {
            if (confirm("Are you sure you want to delete " + song.idea.name)) {
                $scope.band.songCatalog.splice($scope.band.songCatalog.indexOf(song), 1);
            }
        };
    }]);
//# sourceMappingURL=app.js.map