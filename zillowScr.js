"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
var fs = require("fs");
var path = require("path");
function downloadImages() {
    return __awaiter(this, void 0, void 0, function () {
        var options, response, html, $_1, imageUrls_1, downloadDirectory, index, imageUrl, imageResponse, filePath, imageFile, error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Downloading images...');
                    options = {
                        method: 'GET',
                        url: 'https://zillow56.p.rapidapi.com/search_url',
                        params: {
                            url: 'https://www.zillow.com/homes/for_sale/2_p/?searchQueryState=%7B%22pagination%22%3A%7B%22currentPage%22%3A2%7D%2C%22mapBounds%22%3A%7B%22west%22%3A-112.39143704189931%2C%22east%22%3A-110.78468655361806%2C%22south%22%3A32.79032628812945%2C%22north%22%3A33.7227901388417%7D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22con%22%3A%7B%22value%22%3Afalse%7D%2C%22apa%22%3A%7B%22value%22%3Afalse%7D%2C%22mf%22%3A%7B%22value%22%3Afalse%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%2C%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%2C%22land%22%3A%7B%22value%22%3Afalse%7D%2C%22manu%22%3A%7B%22value%22%3Afalse%7D%2C%22apco%22%3A%7B%22value%22%3Afalse%7D%7D%2C%22isListVisible%22%3Atrue%7D',
                            page: '3'
                        },
                        headers: {
                            'X-RapidAPI-Key': 'cbfde87e86msh83ff215cfb2fd27p1cdc32jsn5ef3d31c9096',
                            'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
                        }
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 9, , 10]);
                    return [4 /*yield*/, axios_1.default.request(options)];
                case 2:
                    response = _a.sent();
                    html = response.data;
                    $_1 = cheerio_1.default.load(html);
                    imageUrls_1 = [];
                    $_1('img').each(function (index, element) {
                        var src = $_1(element).attr('src');
                        if (src !== undefined) {
                            imageUrls_1.push(src);
                        }
                    });
                    console.log('Image URLs:', imageUrls_1);
                    downloadDirectory = './downloads';
                    if (!fs.existsSync(downloadDirectory)) {
                        fs.mkdirSync(downloadDirectory);
                    }
                    index = 0;
                    _a.label = 3;
                case 3:
                    if (!(index < imageUrls_1.length)) return [3 /*break*/, 8];
                    imageUrl = imageUrls_1[index];
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, axios_1.default.get(imageUrl, { responseType: 'stream' })];
                case 5:
                    imageResponse = _a.sent();
                    filePath = path.join(downloadDirectory, "image_".concat(index, ".jpg"));
                    imageFile = fs.createWriteStream(filePath);
                    imageResponse.data.pipe(imageFile);
                    console.log("Image ".concat(index + 1, " downloaded successfully"));
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error("Error downloading image ".concat(index + 1, ":"), error_1);
                    return [3 /*break*/, 7];
                case 7:
                    index++;
                    return [3 /*break*/, 3];
                case 8: return [3 /*break*/, 10];
                case 9:
                    error_2 = _a.sent();
                    console.error('Error:', error_2);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
downloadImages();
