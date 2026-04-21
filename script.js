const storyText = `긴급 상황! 삐- 삐-\n\n박물관의 마스코트 '해버미'가\n도감을 잃어버렸어요ㅜㅜ!\n\n탐험가님! 해버미를 도와\n도감을 완성해 주세요!`;
let i = 0; let timer;
let currentStep = 0;
let currentFloor = 0;
let userInventory = []; // 획득한 배를 담을 보물 상자(도감 데이터)

const imgNormal = "./images/main_normal.webp";
const imgCry = "./images/main_cry.webp";
const imgSmile = "./images/main_smile.webp";
const imgFantastic = "./images/main_fantastic.webp";
const imgProud = "./images/main_proud.webp";
const imgbook_haenyeocloth = "./images/book_haenyeosuit.webp"
const img2f_mapX = "./images/2f_mapX.webp";
const img2f_mapO = "./images/2f_mapO.webp";
const img2f_mascotsill = "./images/2f_mascotsill.webp";
const imgM2f_mascot = "./images/2f_mascot.webp";
const img2f_250sill = "./images/2f_250sill.webp";
const img2f_250 = "./images/2f_250.webp";
const imgStamp = "./images/main_stamp.webp";
const img2f_back = "./images/2f_back.webp";
const img3f_aquaback = "./images/3f_acuaback.webp";
const img3f_aquamap = "./images/3f_acuamap.webp";
const img3f_aquamaphint = "./images/3f_acuamaphint.webp";
const img3f_seahorse = "./images/3f_seahorse.webp";
const img3f_seahorsesill = "./images/3f_seahorsesill.webp";
const img4f_1back = "./images/4f_1back.webp";
const img4f_1map = "./images/4f_1map.webp";
const img4f_1mapin = "./images/4f_1mapin.webp";
const img4f_1map2 = "./images/4f_1map2.webp"
const imgTamiSil = "./images/4f_tamisill.webp";
const imgTamiNormal = "./images/4f_taminormal.webp";
const imgTamiJoy = "./images/4f_tamijoy.webp";
const imgTamiShh = "./images/4f_tamishh.webp";
const img4f_2astroalabe = "./images/4f_2astroalabe.webp";
const img4f_3map = "./images/4f_3map.webp";
const img4f_4ceramic = "./images/4f_4ceramic.webp";
const img4f_4Findceramic = "./images/4f_4findceramic.webp";
const img4f_4spice = "./images/4f_4spice.webp";
const img4f_4silkmap = "./images/4f_4silkmap.webp";
const img4f_5map = "./images/4f_5map.webp";
const img4f_5Mado = "./images/4f_5mado.webp";
const img4f_5panok = "./images/4f_5panok.webp";
const img4f_5bosun = "./images/4f_5bosun.webp";
const img4f_5bosunsill = "./images/4f_5bosunsill.webp";
const img4f_5daepae = "./images/4f_5daepae.webp";
const img4f_5daepaesill = "./images/4f_5daepaesill.webp";
const img4f_5bosunpaint = "./images/4f_5bosunpaint.webp";
const imgBg3F = "./images/3f_1back.webp";
const imgfriend = "./images/book_friend.webp";
const imgsamoNormal = "./images/3f_1samohebuminormal.webp";
const imgsamoProud = "./images/3f_1samohebumiproud.webp";
const imgsamosad = "./images/3f_1samohebumisad.webp";
const imgsamosill = "./images/3f_1samohebumisill.webp";
const imgsamoSmile = "./images/3f_1samohebumismile.webp";
const img3f_1mapship = "./images/3f_1mapship.webp";
const img3f_1worldMap = "./images/3f_1worldmap.webp"
const img3f_1tongshinship = "./images/3f_1tongshinsaship.webp";
const img3f_1tongshinflag = "./images/3f_1tongshinflag.webp";
const img3f_1Map = "./images/3f_1map.webp";
const img3f_2guirodo = "./images/3f_2guirodo.webp";
const img3f_2map = "./images/3f_2map.webp";
const img3f_2traderFantastic = "./images/3f_2traderhaebumifantastic.webp";
const img3f_2traderNormal = "./images/3f_2traderhaebuminormal.webp";
const img3f_2traderProud = "./images/3f_2traderhaebumiproud.webp";
const img3f_2traderSad = "./images/3f_2traderhaebumisad.webp";
const img3f_2traderSmile = "./images/3f_2traderhaebumismile.webp";
const img3f_2traderSill = "./images/3f_2traderhaebumisill.webp";
const img3f_3blueHo = "./images/3f_3blueho.webp";
const img3f_3ham = "./images/3f_3ham.webp";
const img3f_3ho = "./images/3f_3ho.webp";
const img3f_3hotop = "./images/3f_3hotop.webp"
const img3f_3fan = "./images/3f_2handfan.webp";
const img3f_3fansill = "./images/3f_2handfansill.webp";
const img3f_4gim = "./images/3f_4gim.webp";
const img3f_4bitchang = "./images/3f_4bitchang.webp";
const img3f_4map = "./images/3f_4map.webp";
const img3f_4muzawi = "./images/3f_4muzawi.webp";
const img3f_4seaglass = "./images/3f_4seaglass.webp";
const img3f_4taewak = "./images/3f_4taewak.webp";
const img3F_4bbulbae = " ./images/3f_4bbullbae.webp";
const img3f_4seawomenfantastic = "./images/3f_4seawomenfantastic.webp";
const img3f_4seawomennormal = "./images/3f_4seawomennormal.webp";
const img3f_4seawomensill = "./images/3f_4seawomensill.webp";
const img3f_4seawomensmile = "./images/3f_4seawomensmile.webp";
const img3f_4seawomensad = "./images/3f_4seawomensad.webp";
const img3f_5abalone = "./images/3f_5abalone.webp";
const img3f_5urchin = "./images/3f_5urchin.webp";
const img3f_5starfish = "./images/3f_5starfish.webp";

window.onload = function () {
    // 🌟 [절대 방어 1] 만약 7초가 지나도 로딩이 안 끝나면? 강제로 창을 닫아버립니다!
    const maxWaitTime = 15000;
    let isLoaded = false;

    const emergencyPass = setTimeout(() => {
        if (!isLoaded) {
            console.warn("⏳ 로딩 시간 초과! 강제로 게임 화면으로 진입합니다.");
            finishLoading();
        }
    }, maxWaitTime);

    try {
        // 선생님이 넣으신 이미지 변수들 (이 변수들이 위쪽에 잘 정의되어 있어야 합니다!)
        const allImages = [
            imgNormal, imgCry, imgSmile, imgFantastic, imgProud, imgbook_haenyeocloth,
            img2f_mapX, img2f_mapO, img2f_mascotsill, imgM2f_mascot, img2f_250sill, img2f_250,
            imgStamp, img2f_back, img3f_aquaback, img3f_aquamap, img3f_aquamaphint,
            img3f_seahorse, img3f_seahorsesill, img4f_1back, img4f_1map, img4f_1mapin,
            img4f_1map2, imgTamiSil, imgTamiNormal, imgTamiJoy, imgTamiShh, img4f_2astroalabe,
            img4f_3map, img4f_4ceramic, img4f_4Findceramic, img4f_4spice, img4f_4silkmap,
            img4f_5map, img4f_5Mado, img4f_5panok, img4f_5bosun, img4f_5bosunsill,
            img4f_5daepae, img4f_5daepaesill, img4f_5bosunpaint, imgBg3F, imgfriend,
            imgsamoNormal, imgsamoProud, imgsamosad, imgsamosill, imgsamoSmile,
            img3f_1mapship, img3f_1worldMap, img3f_1tongshinship, img3f_1tongshinflag,
            img3f_1Map, img3f_2guirodo, img3f_2map, img3f_2traderFantastic, img3f_2traderNormal,
            img3f_2traderProud, img3f_2traderSad, img3f_2traderSmile, img3f_2traderSill,
            img3f_3blueHo, img3f_3ham, img3f_3ho, , img3f_3hotop, img3f_3fan, img3f_3fansill, img3f_4gim,
            img3f_4bitchang, img3f_4map, img3f_4muzawi, img3f_4seaglass, img3f_4taewak,
            img3F_4bbulbae, img3f_4seawomenfantastic, img3f_4seawomennormal, img3f_4seawomensill,
            img3f_4seawomensmile, img3f_4seawomensad, img3f_5abalone, img3f_5urchin, img3f_5starfish
        ];

        let loadedCount = 0;
        const totalCount = allImages.length;
        const loadingBar = document.getElementById('loading-bar');

        if (totalCount === 0) {
            finishLoading();
            return;
        }

        allImages.forEach(src => {
            // 🌟 [절대 방어 2] 혹시 변수가 비어있어도 에러 안 나게 패스
            if (!src) {
                loadedCount++;
                updateProgress();
                return;
            }

            const img = new Image();

            // 이미지가 받아지거나 실패했을 때
            img.onload = img.onerror = () => {
                loadedCount++;
                updateProgress();
            };

            img.src = src;
        });

        function updateProgress() {
            const percentage = Math.floor((loadedCount / totalCount) * 100);

            if (loadingBar) {
                loadingBar.style.width = percentage + "%";
            }

            if (loadedCount >= totalCount) {
                setTimeout(finishLoading, 300); // 바가 끝까지 차는 거 볼 시간 0.3초
            }
        }

    } catch (error) {
        // 🌟 [절대 방어 3] JS 변수명 오타 등으로 코드가 터져도 화면은 열리게!
        console.error("🚨 로딩 스크립트 에러 발생! 강제로 진입합니다.", error);
        finishLoading();
    }

    // 최종 화면 전환 함수 (선생님 요청대로 페이드 인 효과 삭제!)
    function finishLoading() {
        if (isLoaded) return; // 두 번 실행 방지
        isLoaded = true;
        clearTimeout(emergencyPass); // 타이머 취소

        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            // 스르륵 사라지는 거 없이 쿨하게 바로 끕니다!
            loadingScreen.style.display = "none";
        }
    }
};
// 🌟 [핵심 수선] 2. 로컬 스토리지에서 이름을 먼저 가져옵니다! (이 줄이 빠져있었습니다)
const savedName = localStorage.getItem("explorerName");

// 3. 기록이 있는지 확인 (이제 savedName이 정의되었으니 에러가 안 납니다!)
if (savedName) {
    // 기록이 있으면 이름 입력창 숨기고 이어하기 메뉴 보여줌
    const loginSection = document.getElementById("login-section");
    const saveSection = document.getElementById("save-load-section");
    const nameDisplay = document.getElementById("saved-name");

    if (loginSection) loginSection.style.display = "none";
    if (saveSection) saveSection.style.display = "block";
    if (nameDisplay) nameDisplay.innerText = savedName;

    console.log("⚓ " + savedName + " 탐험가님의 세이브 데이터를 발견했습니다.");
}

const cardData = {
    "museum": { title: "국립해양박물관", img: "./images/book_museum.webp", desc: "우리나라 최초의 종합해양박물관, 해양의 역사와 문화를 한 곳에서 볼 수 있다." },
    "haebeomi": { title: "해버미", img: "./images/book_baebumi.webp", desc: "탐험을 함께 할 마스코트 해버미! 조금은 덜렁대지만 듬직한 동료다." },
    "viking": { title: "바이킹선", img: "./images/4f_3viking.webp", desc: "바이킹들이 타고 다니던 공포의 해적선! 바다와 강 어디든 갈 수 있다." },
    "victoria": { title: "빅토리아호", img: "./images/4f_3victoria.webp", desc: "최초의 세계일주선박! 1522년 빅토리아호는 3년의 항해 끝에 세계일주에 성공했다." },
    "cuttysark": { title: "커티삭호", img: "./images/4f_3cutty.webp", desc: "초고속 티클리퍼! 커티삭은 한때 세계에서 가장 빠른 무역선이었다." }
};

const introDialogs = [
    { speaker: "해버미", text: "안녕! (이름) 탐험가님! 난 해박탐험단의 탐원단원 해버미야", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "박물관을 탐험하다가 그만 열심히 만든 박물관도감을 잃어버렸어...", img: imgCry, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "나랑 같이 박물관을 탐험하고 도감을 채워주지 않을래?", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "준비가 됐다면 본격적인 탐험을 떠나보자!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "메인화면에서는 탐험을 할 층을 선택할 수 있어!", img: imgSmile },
    { speaker: "해버미", text: "위쪽의 탐험 진행도가 보이지? 진행도를 통해 도감을 얼마나 모았는지 알 수 있어", img: imgSmile },
    { speaker: "해버미", text: "그럼 박물관 도감을 먼저 살펴볼까? 다음 버튼을 눌러봐", img: imgSmile },
    { speaker: "해버미", text: "탐험을 통해 획득한 유물카드는 박물관 도감에 등록돼!", img: imgSmile },
    { speaker: "해버미", text: "국립해양박물관 카드는 벌써 도감에 등록되어있네? 확인해보자!", img: imgSmile },
    { speaker: "해버미", text: "도감카드에는 설명이 같이 있어 꼭 읽어봐!", img: imgSmile },
    { speaker: "해버미", text: "이제 정말 박물관 탐험을 떠나볼까? 해박탐험단 출동!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" }
];

const floor2Dialogs = [
    { speaker: "해버미", text: "박물관 2층에 도착했어!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "국립해양박물관 2층에는 기획전시실과 어린이박물관이 있어!", img: img2f_mapX, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "어린이박물관 앞에 우리를 도와줄 단원들이 기다리고 있다고 했는데... 먼저 찾아볼까?", img: img2f_mapO, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "어? 동료들이 있는 거 같아!", img: img2f_mascotsill, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "단원들이 머리에 무언가를 쓰고 있네? 뭘 쓰고 있을까?", img: img2f_mascotsill, quiz: "mascot", imgWidth: "85%", imgBottom: "45%" },
    { speaker: "둥둥,뿌뿌,랑랑", text: "안녕 (이름) 탐험가님! 우린 어린이박물관의 마스코트 둥둥, 뿌뿌, 랑랑이야! 만나서 반가워!", img: imgM2f_mascot, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "둥둥,뿌뿌,랑랑", text: "도감을 만들고 있다고? 정말 멋진걸! 우리도 마침 도감에 넣을 잠수정을 찾고 있었어!", img: imgM2f_mascot, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "둥둥,뿌뿌,랑랑", text: "아주 노랗고 예쁜 잠수정이야. 국가중요과학유산이기도 해", img: imgM2f_mascot, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "둥둥,뿌뿌,랑랑", text: "야외에 있는 노란 잠수정을 찾아봐! 이름을 알 수 있을 거야!", img: img2f_250sill, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "둥둥,뿌뿌,랑랑", text: "우리가 찾는 이 잠수정의 이름은 무엇일까?", img: img2f_250sill, quiz: "sub", imgWidth: "85%", imgBottom: "45%" },
    { speaker: "둥둥,뿌뿌,랑랑", text: "와! 정답이야! 해양-250! 아주 노랗고 예쁘지?", img: img2f_250, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "둥둥,뿌뿌,랑랑", text: "우리나라가 만든 최초의 <유인>, 그러니까 사람이 탈 수 있는 잠수정이야!", img: img2f_250, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "둥둥,뿌뿌,랑랑", text: "무려 바닷속 250m까지 들어갈 수 있었어! 그래서 해양-250이라고 불러!", img: img2f_250, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "우와 정말 신기하다! 언젠가 나도 멋진 잠수정을 타고 깊은 바다를 탐험해 보고 싶어", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "고마워 둥둥,뿌뿌,랑랑아! 덕분에 2층 도감을 완성했어 (이름) 탐험가! 이제 다른 층으로 가볼까?", img: imgSmile, imgWidth: "60%", imgBottom: "45%" }
];

const floor3Dialogs = [
    { speaker: "해버미", text: "우와 여기가 3층 상설전시실이구나!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "입구에 들어가기 전에 저기 엄청 큰 배부터 먼저 보러가자!", img: img3f_1mapship, imgWidth: "80%", imgBottom: "45%" },
    { speaker: "해버미", text: "배 진짜 크다! 이게 바로 조선통신사선이구나?", img: img3f_1tongshinship, imgWidth: "80%", imgBottom: "45%" },
    { speaker: "해버미", text: "통신사는 조선에서 일본으로 먼 바다를 건너야해서 이렇게 큰 배를 탔어!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "이 배는 통신사선을 반으로 줄여서 만든 모형이야! 실제로는 이것보다 4배는 더 컸다구!", img: imgProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "통신사를 이끄 대장을 00이라고 불렀어 한 번 맞춰볼래?", img: img3f_1tongshinship, imgWidth: "80%", imgBottom: "45%" },
    { speaker: "해버미", text: "깃발에 걸려있는 글자가 힌트일지도?", img: img3f_1tongshinflag, imgWidth: "80%", imgBottom: "45%", quiz: "tongshinsa_quiz" },
    { speaker: "해버미", text: "맞아! 정답이야!...응? 뭔가...이상한데?", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "???", text: "아이고 (이름) 정사대감! 이렇게 늦게 오시면 어떡합니까?", img: imgsamosill, imgWidth: "60%", imgBottom: "45%", effect: "flash" },
    { speaker: "부사", text: "지금 시간축이 꼬여버렸습니다! 세상에나 얼른 일본으로 건너가야하는데!", img: imgsamosad, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "대감! 여기서 뭐하고 있으셨어요?!", img: imgsamoNormal, quiz: "tongshinsa_why", imgWidth: "60%", imgBottom: "45%" },
    { id: "busa-reaction", speaker: "부사", text: "", img: imgsamoNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "상설전시실 항해관은 총 3부로 구성되어있습니다.", img: img3f_1worldMap, imgWidth: "80%", imgBottom: "40%" },
    { speaker: "부사", text: "정사대감께서도 잘 아시겠지만 '기록 속 우리바다'는 선조들의 다양한 항해기록을 모아둔 공간입니다!", img: img3f_1Map, imgWidth: "80%", imgBottom: "40%" },
    { speaker: "부사", text: "다양한 유물들이 있지만 우리한테 필요한건 일본을 오가는 바닷길 아니겠습니까?", img: imgsamoSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "'귀로도중도'를 먼저 보고 가시죠! 바닷길을 살펴보기엔 최고일겁니다!", img: imgsamoProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "대감 '귀로도중도'를 찾으셨을까요?", img: imgsamoSmile, quiz: "guirodo_find", imgWidth: "60%", imgBottom: "45%" },
    { id: "busa-reaction2", speaker: "부사", text: "", img: imgsamoSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "(이름) 정사대감! 그러면 한 가지만 확인해보겠습니다!", img: imgsamoNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "절대 의심하는건 아닙니다! 확인입니다 확인!", img: imgsamoSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "귀로도중도는 OO에서 OO까지의 여정을 상세하게 그린 그림입니다! 여기서 OO과 OO은 어디일까요?", img: imgsamoSmile, imgWidth: "60%", imgBottom: "45%", quiz: "guirodo_quiz" },
    { speaker: "부사", text: "캬 (이름) 대감께서는 역시! 탁월하십니다! 괜히 정사가 되신게 아니네요!", img: imgsamoProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "대감! 그럼 다음으로 넘어가시죠! 아직 갈길이 멉니다!", img: imgsamoSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "부사", text: "여기는 예술 속 우리바다입니다. 아름다운 그림과 해양예술품으로 가득한 곳이죠!", img: img3f_2map, imgWidth: "80%", imgBottom: "45%" },
    { speaker: "부사", text: "물건을 보여줄 무역상이 온다고 했는데...", img: imgsamoNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "???", text: "아이고~ 대감마님~ 물건 보러오셨구나?", img: img3f_2traderSill, imgWidth: "60%", imgBottom: "45%", quiz: "traderham_who" },
    { id: "trader-reaction", speaker: "무역상", text: "접니다 저! 최고의 무역상 해버미!", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "아유 거참 오시면 오신다고 말씀을 하시지~ 그래 오늘은 무슨 물건을 보러 오셨을까?", img: img3f_2traderProud, imgWidth: "60%", imgBottom: "45%", quiz: "goods_what" },
    { id: "trader-reaction2", speaker: "무역상", text: "잘오셨네! 잘오셨어! 그거라면 요즘 이게 최고에요!", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "더울 때 시원하게~ 어? 햇빛도 막을 수 있고 으이? 예쁘긴 또 얼마나 예쁜지 몰라", img: img3f_2traderProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "지금 사시면 완전 거저다 거저! 아이고 어디가서 말씀 하시면 안돼요?", img: img3f_2traderFantastic, imgWidth: "60%", imgBottom: "45%", quiz: "goods_what2" },
    { id: "trader-reaction3", speaker: "무역상", text: "바로 그건 말입니다!...어... 물건..이 어디갔지?", img: img3f_2traderNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "내 물건!! 없어졌어!!", img: img3f_2traderSad, imgWidth: "60%", imgBottom: "45%", },
    { speaker: "무역상", text: "(이름) 대감마님... 죄송하지만 물건을 찾는걸 도와주십쇼ㅜㅜ", img: img3f_2traderSad, imgWidth: "60%", imgBottom: "45%", },
    { speaker: "무역상", text: "분명히 이렇게 생긴 물건이었습니다요! 아이고 어디간거야ㅜㅜ!", img: img3f_3fansill, imgwidth: "80%", imgBottom: "40%", quiz: "quiz_fan" },
    { id: "fan-reaction", speaker: "무역상", text: "아이고! 이 영롱한 때깔! 맞습니다! 나전부채가맞아요ㅜㅜ!", img: img3f_3fan, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "감사합니다 대감마님! 나전공예품이 정말 예쁘죠?", img: img3f_2traderFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "나전은 전복껍데기로 만드는 멋진 공예품입죠!", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "정말 감사합니다 대감마님! 답례로 도감에 부채를 등록해드릴게요!", img: img3f_2traderFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "전시장에 있는 유물 중 더 궁금하신 것이 있을까요?", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { text: "유물 설명 이벤트 시작", quiz: "artifact_choice", img: img3f_2traderSmile, imgWidth: "60%" },
    { speaker: "무역상", text: "그렇군요! 좋습니다! (이름) 대감마님 덕분에 나전부채도 찾고, 정말 다시 한 번 감사드려요!", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "그런데 도감을 채우고 있다고 하셨죠? 음... 어쩌면 말입니다?", img: img3f_2traderFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "'우리 삶 속 바다'로 가보시죠? 바다를 훼손하지 않는, 우리만의 전통 어업방식을 전시한 곳이에요!", img: img3f_4map, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "나전을 만들 때 쓰는 전복이나 조개를 거래하는 친구가 있는데 미리 말해두겠습니다! 가서 해녀를 찾아보세요!", img: img3f_2traderProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "(이름)대감마님! 조심히 가셔요! 다음에 또 보기에요!", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "???", text: "이어도사나♩ 이어도사나♪ 우리 배는 잘도간다♬", img: img3f_4seawomensill, imgWidth: "60%", imgBottom: "45%", quiz: "seawomen_find" },
    { id: "seawomen_reaction", speaker: "해녀", text: "어마나 깜짝이야", img: img3f_4seawomensill, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해녀", text: "오잉...? 뉘신지??", img: img3f_4seawomennormal, imgWidth: "60%", imgBottom: "45%", quiz: "seawomen_who" },
    { id: "seawomen_reaction2", speaker: "해녀", text: "어? 아?! 아아!! 맞나! 도감을 채우고 있다면서? 이야기 들었다!", img: img3f_4seawomenfantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해녀", text: "아이고 육지양반 반갑다! 그런 일이라면 이 해녀 해버미를 잘 찾아왔다! 마침 일손이 필요했거든!", img: img3f_4seawomensmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해녀", text: "무역상에게 보낼 해산물을 모아야 하는데 필요한 도구들이 전부 섞여 버렸다ㅜㅜ!", img: img3f_4seawomensad, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해녀", text: "전시장을 쓱 보고 전복을 캘 때 필요한 도구를 찾으면 쉬울거다!", img: img3f_4seawomensmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해녀", text: "물질에 필요한 도구를 골라봐라 자 첫 번째 도구는 뭘까?", img: img3f_4seawomensmile, imgWidth: "60%", imgBottom: "45%", quiz: "haenyeo_tool1" },
    { speaker: "해녀", text: "좋아! 잘했다! 두 번째 도구는 뭘까?", img: img3f_4seawomensmile, imgWidth: "60%", imgBottom: "45%", quiz: "haenyeo_tool2" },
    { speaker: "해녀", text: "장난아니네! 마지막 세 번째 도구는 뭘까?", img: img3f_4seawomensmile, imgWidth: "60%", imgBottom: "45%", quiz: "haenyeo_tool3" },
    { speaker: "해녀", text: "와 테왁망사리와 빗창, 그리고 물안경까지 있다면 준비 끝이다!", img: img3f_4seawomensmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해녀", text: "해녀가 되었으니 물질도 해봐야겠지? 제한시간 동안 정해진 수량만큼 전복을 따면된다! 준비됐나?", img: img3f_4seawomensmile, imgWidth: "60%", imgBottom: "45%", quiz: "start_diving_game" },
    { speaker: "해녀", text: "고생했다! 물질도 제법이네! 어디가서 굶을 일은 없겠다!", img: img3f_4seawomensmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해녀", text: "응..? 뭐지...? 뭔가 익숙하면서 이상한 느낌이?!", img: img3f_4seawomennormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해녀", text: "으으... 머리야 이게 무슨 일이야?", img: imgNormal, imgWidth: "60%", imgBottom: "45%", effect: "flash" },
    { speaker: "해녀", text: "어?! (이름) 탐험가! 여기서 뭐해", img: imgFantastic, imgWidth: "60%", imgBottom: "45%", quiz: "haebumi_find" },
    { id: "haebumu_reaction", speaker: "해버미", text: "", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "전혀 기억이 안나 뭔가 있었던 거 같기도 하고", img: imgSmile, imgWidth: "60%", imgBottom: "45%", },
    { speaker: "해버미", text: "오잉? 이건 전복이잖아?! 이게 왜 나한테", img: img3f_5abalone, imgWidth: "60%", imgBottom: "45%", },
    { speaker: "해버미", text: "그렇다는건...! (이름) 탐험가 말이 진짜였어?!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%", },
    { speaker: "해버미", text: "(이름) 탐험가! 우리가 정말 시공간을 넘어 전시실을 탐험한거야?", img: imgProud, imgWidth: "60%", imgBottom: "45%", },
    { speaker: "해버미", text: "도감도 다 채워져있고... 나도 돌아왔고! 정말 고마워 (이름) 탐험가!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%", },
    { speaker: "해버미", text: "덕분에 3층 상설전시실도 무사히 탐험할 수 있었어! 이제 다른 곳으로 가볼까?", img: imgSmile, imgWidth: "60%", imgBottom: "45%", }];

const script_najeon = [
    { speaker: "무역상", text: "나전 대모 쌍룡문 함! 안목이 아주 뛰어나십니다. 대감마님!", img: img3f_3ham, imgwidth: "80%", imgBottom: "45%" },
    { speaker: "무역상", text: "이름이 어려워 보이지만 사실 간단합니다!", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "두 마리 용이 구름 속에서 여의주를 놓고 싸우고 있네요!", img: img3f_3ham, imgwidth: "80%", imgBottom: "45%" },
    { speaker: "무역상", text: "용의 눈과 구름은 나전으로, 용의 비늘은 물고기 가죽으로, 여의주는 거북이 등껍질로 만들었답니다!", img: img3f_3ham, imgwidth: "80%", imgBottom: "45%" },
    { speaker: "무역상", text: "함은 '상자'라는 뜻이에요. 지금 모습은 뚜껑을 덮어놓은 모습이랍니다.", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "제대로 보셨는지 확인해 볼까요? 유물 속 용은 한 발에 발가락 몇 개를 가지고 있을까요?", img: img3f_2traderProud, imgwidth: "60%", imgBottom: "45%", quiz: "najeon_toe" },
    { speaker: "무역상", text: "전시장에 있는 유물 중 더 궁금하신 것이 있을까요?", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
];

const script_baekja = [
    { speaker: "무역상", text: "백자 철화 운룡문 호! 안목이 아주 뛰어나십니다. 대감마님!", img: img3f_3ho, imgwidth: "80%", imgBottom: "45%" },
    { speaker: "무역상", text: "이름이 어려워 보이지만 사실 간단합니다!", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "무역상", text: "‘백자’는 하얀 도자기고, ‘철화’는 안료, 그러니까 철성분이 든 물감을 썼다는 겁니다.", img: img3f_3ho, imgwidth: "80%", imgBottom: "45%" },
    { speaker: "무역상", text: "운룡문은 구름과 용을 그렸다는 뜻이고요. 호는 항아리란 뜻이에요.", img: img3f_3ho, imgwidth: "80%", imgBottom: "45%" },
    { speaker: "무역상", text: "자세히 봐보세요! 위·아래 균형이 다르죠? 처음부터 상·하의 몸통을 따로 만들어 합치는 겁니다! 바로 그 불균형이 매력포인트입니다!", img: img3f_3ho, imgwidth: "80%", imgBottom: "45%" },
    { speaker: "무역상", text: "철화퇴점, 자세히보면 도자기 입구에 23개의 점이 찍혀있어요! 우리나라에서는 유일하다나?", img: img3f_3hotop, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "그럼 두 눈을 크게 뜨고 항아리를 관찰해 볼까요? 호는 어떤 모습으로 전시되어있나요??", img: img3f_3ho, imgwidth: "80%", imgBottom: "45%", quiz: "baekja_ox" },
    { speaker: "무역상", text: "전시장에 있는 유물 중 더 궁금하신 것이 있을까요?", img: img3f_2traderSmile, imgWidth: "60%", imgBottom: "45%" },

];

let currentSubStory = "";
let subStoryIndex = 0;

const floorAquaDialogs = [
    { speaker: "해버미", text: "우와 수족관이다!!!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "여기는 국립해양박물관의 자랑인 수족관이야!!", img: img3f_aquamap, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "가오리, 상어 같은 많은 물고기 친구들뿐 아니라 진짜 산호나 해파리도 만나볼 수 있어!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "다 소중하고 좋은 친구들이지만, 내 도감에는 다른 해양생물이 있었어 흑흑", img: imgCry, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "누구더라? 암컷이 아닌 수컷이 출산을 한다고 했는데?", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "맞아! 이렇게 생긴 친구였어! 혹시 누군지 알겠니?", img: img3f_seahorsesill, imgWidth: "75%", imgBottom: "45%" },
    { speaker: "해버미", text: "수족관 어딘가에 친구들이 모여산다고 했어! 같이 찾아보자!", img: img3f_seahorsesill, quiz: "seahorse", imgWidth: "75%", imgBottom: "40%" },
    { speaker: "해버미", text: "우와 맞아! 빅밸리해마였어!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "놀라지마! 국립해양박물관이 직접 번식시킨 해마라구! 정말 대단하지?", img: imgProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "그런데 환경파괴와 바다오염으로 많은 해마친구들이 살 곳을 잃어버리고 있대", img: imgCry, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "(이름) 탐험가는 바다를 깨끗하게 지켜줄거지? 약속이야!!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "좋아! 수족관은 다 둘러봤어? 수족관 옆에 있는 미디어전시실도 잊지말고 꼭 가봐!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "수족관 도감도 완성했으니까 이제 다른 곳으로 가보자!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" }
];

const floor5Dialogs = [
    { speaker: "해버미", text: "우와 여기가 바로 상설전시실 항해관이구나!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "항해관은 선박과 항해도구, 항해기술을 전시하는 공간이야!", img: img4f_1map, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "‘바다의 길잡이’, ‘항해의 시대’, ‘우리가 지켜낸 바다’를 주제로 우리나라 뿐 아니라 세계의 해양역사를 공부할 수 있는 공간이지!", img: img4f_1mapin, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "아마 한국의 어떤 박물관에서도 볼 수 없는 아주 멋진 공간일걸?!", img: imgProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "첫 번째 전시실인 <바다의 길잡이>는 항해에 필요한 다양한 도구를 전시하고 있어", img: img4f_1map2, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "그중에서도 내 도감에 있는 아스틀라베가 최고야! (이름) 탐험가만 특별히 보여줄게", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "...?", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "없어! 어디갔어? 없어졌어! 내 아스트롤라베!!!", img: imgCry, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "???", text: "누가 이렇게 박물관에 떠들어?!", img: imgTamiSil, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "어?! 이 목소리는? 타미야! 여기 있었구나!! 만나서 반가워~", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "???", text: "해버미?! 안그래도 찾고있었는데 여기 있었구나?", img: imgTamiSil, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "(이름) 탐험가! 여기는 내 소중한 친구 타미라고 해. 탐험에 대해서는 모르는게 없는 아주 똑똑한 친구지.", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "안녕? (이름) 탐험가라고 하는구나! 만나서 반가워! 그런데 여기서 뭘 하고 있니?", img: imgTamiJoy, quiz: "tami_reason", imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "...", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%", id: "tami-reaction" },
    { speaker: "타미", text: "아무리 그래도 그렇지 박물관에서 그렇게 크게 울면 어떡해!", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "ㅠㅠ...", img: imgCry, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "어휴 어쩔 수 없지... (이름) 탐험가! 미안하지만 해버미의 아스트롤라베를 같이 찾아주지 않을래?", img: imgTamiNormal, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "이런 일이 있을 줄 알고 내가 아스트롤라베를 찾는데 필요한 중요한 단서들을 모아뒀어.", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "(이름) 탐험가! 우측 상단의 단서들을 하나씩 눌러봐", img: imgTamiShh, triggerClues: true, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "아스트롤라베를 찾았어? 다시는 잊어버리지 않게 언제 만들어진 유물인지 알려줘!", img: imgFantastic, quiz: "astrolabe_year", imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "정말 고마워! (이름) 탐험가는 내 은인이야! 너의 도감에도 아스트롤라베를 등록해줄게", img: imgSmile, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "찾았구나! 아스트롤라베는 태양과 별을 보고 바다에서 길을 찾을 수 있는 아주 중요한 항해도구였어!", img: img4f_2astroalabe, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "그리스어로 '별을 붙잡는 것'이라는 의미래 멋지다 그치?", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "아스트롤라베도 찾았으니 다음 도감을 채우러 가볼까?!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "<항해의시대>로 가보자 탐험을 할 배들이 모여있어!", img: img4f_3map, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "타미", text: "해버미 그런데 어떤 배를 찾을지는 정했어?", img: imgTamiNormal, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "응? 아니? 안정했는데!!", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "뭐?! 그것도 정하지 않고 탐험에 나서면 어떡해!", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "그럼 지금 다같이 정하자! (이름) 탐험가! 어떤 배를 찾아야 할까?", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "어떤 배를 찾아야 할까?", img: imgSmile, quiz: "ship_choice" },
    { id: "choice-reaction", speaker: "타미", text: "", img: imgTamiNormal, imgWidth: "70%" },
    { id: "hint-1", speaker: "타미", text: "", img: imgTamiNormal, imgWidth: "70%" },
    { id: "hint-2", speaker: "타미", text: "", img: imgTamiShh, imgWidth: "70%" },
    { speaker: "타미", text: "이제 전시실에서 배를 찾아봐! 이름이 뭘까?", img: imgTamiJoy, imgWidth: "70%" },
    { speaker: "타미", text: "실루엣을 보고 정답을 맞춰봐!", img: imgTamiNormal, imgWidth: "70%", quiz: "ship_silhouette" },
    { speaker: "해버미", text: "와 (이름) 탐험가 정답이야! 정말 대단해!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { id: "ship-deep-info", speaker: "타미", text: "", img: imgTamiJoy, imgWidth: "70%" },
    { speaker: "해버미", text: "이제 배도 찾았으니 진짜 항해를 해볼까?", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "영!차!영!차! 좌우를 번갈아가면서 눌러봐! 배가 앞으로 나갈거야", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "목표는 먼 바다의 빨간 등부표까지!, 그럼 준비됐어?", img: imgProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "배의 왼쪽 노(영!)와 오른쪽 노(차!)를 번갈아 저어야 해! 박자에 맞춰 눌러보자! 출발!!", img: imgSmile, quiz: "start_sailing" },
    {
        speaker: "해버미", text: "와! 우리가 레이싱에서 이겼어! (이름) 탐험가와 함께라면 거친 바다도 문제없겠어!", img: imgSmile, imgWidth: "60%", imgBottom: "45%",
        hidePrev: true
    },
    { speaker: "타미", text: "훌륭해! 아스트롤라베도 찾았고, 최고의 배도 골랐고! 도감도 다 채웠어!!", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%", },
    { speaker: "해버미", text: "타미야 그런데 아직 '항해관'은 반이나 남았잖아", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "맞아! 우리나라의 배부터 바다에서 건져올린 진짜 보물까지!", img: imgTamiNormal, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "항해관에는 아직 많은 비밀이 남아있지 어때? (이름) 탐험가! 우리랑 항해관의 남은 비밀을 더 찾아볼까?", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%", quiz: "continue_explore" },
    { id: "explore_yes", speaker: "타미", text: "좋아! 항해관에는 아직 많은 비밀이 숨겨져 있어! 우리 함께 비밀을 파헤쳐 보자!", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "우선 전시실 안쪽에 있는 작은 방으로 들어가볼까?", img: img4f_4silkmap, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "킁킁~ 우와! 여기선 되게 신기한 향기가 난다!", img: imgProud, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "여기는 해상 비단길을 오고 가던 무역선의 내부를 재현한 전시실이야", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "이 신비로운 향은 먼 바다를 항해해 도착한 <향신료>의 냄새지", img: img4f_4spice, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "우와 정말 신기하다! 저기 있는 그릇들은 뭐야?", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "저건 비단길 최고의 인기 아이템! <도자기>야!", img: img4f_4ceramic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "해버미", text: "그래? 그런데 뭔가 하얀것들이 묻어있는데? 진짜 귀한 유물 맞아?", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "어휴! 해버미! 당연히 엄청 소중하고 귀한 유물이지!!", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    {
        speaker: "타미", text: "(이름) 탐험가! 이 도자기에 붙은 하얀 것들은 뭘까? 맞춰볼래?", img: imgTamiNormal, imgWidth: "70%", imgBottom: "45%",
        quiz: "ceramic_choice"
    },
    { speaker: "타미", text: "맞아! 정답이야! 이 하얀 것들은 따개비나 조개 같은 바다생물들의 흔적이야.", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "엥? 왜? 도자기가 조개를 먹기도 해?", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "무슨 소리를 하는 거야!!!", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "이 도자기는 바다에 있던 유물을 건져 올린 유물이야! 하얀건 바다에 있을때 붙은 해양생물의 흔적이라구!", img: img4f_4Findceramic, imgWidth: "85%", imgBottom: "45%" },
    { speaker: "해버미", text: "아 그래서 그런거구나 난 또 뭐라고", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "어쨌든 이 도자기가 얼마나 귀한 유물인지 이제 알겠지?", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "바닷길을 항해하는 상인들은 이 멋진 도자기의 가치를 알아볼 수 있는 눈썰미가 필요했어!", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "(이름) 탐험가는 얼마나 눈썰미가 좋은지 한 번 확인해볼까?", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "전시실에 있는 도자기와 화면 속 도자기가 살짝 다른거 같아! 한 번 찾아볼래?", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%", quiz: "ceramic_diff" },
    { speaker: "해버미", text: "정말 대단해! (이름) 탐험가! 이런 눈썰미라면 실크로드 최고의 상인도 될 수 있겠는걸??!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "다음은 우리나라의 배와 주변나라들의 배를 전시한 곳이야! 같이 가보자", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "우와 여긴 어디야?! 되게 조용하고 멋지다!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "우린 지금 해양관 ‘우리가 지켜낸 바다’ 전시실에 있어!", img: img4f_5map, imgWidth: "85%", imgBottom: "40%" },
    { speaker: "타미", text: "여기는 대한민국과 주변 동아시아 나라들의 해양역사를 담아낸 공간이야", img: img4f_5map, imgWidth: "85%", imgBottom: "40%" },
    { speaker: "해버미", text: "멋진 배가 2대나 있다. 생긴게 살짝 다른거 같기도 하고?", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "자세히 봐봐!", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "왼쪽에 있는 배는 마도 1호선, 물건을 운반하던 조운선이야", img: img4f_5Mado, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "아까 우리가 본 도자기 같은 귀한 물건들도 이런 배에 실려서 옮겨졌겠구나!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "이번에는 오른쪽을 봐볼까? 오른쪽에 있는 배는 판옥선이라는 배야!", img: img4f_5panok, imgWidth: "80%", imgBottom: "45%" },
    { speaker: "타미", text: "판옥선은 조선수군의 대표적인 전투함이었어", img: img4f_5panok, imgWidth: "80%", imgBottom: "45%" },
    { speaker: "타미", text: "조선수군은 강한 대포로 적을 멀리서 격파하는걸 즐겼지!", img: img4f_5panok, imgWidth: "80%", imgBottom: "45%" },
    { speaker: "타미", text: "앗! 전방에 바다괴물이 나타났다! 전방에 적출현! 모든 판옥선 전투배치! 방포하라!", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%", quiz: "start_shooting_game" },
    { speaker: "해버미", text: "우와!!! (이름) 탐험가! 정말 엄청난 실력이다!", img: imgFantastic, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "갑자기 바다괴물이 나타나서 깜짝 놀랐어! 하지만 (이름) 탐험가 덕분에 탐험을 계속 할 수 있을거같아!", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "타미야 얼른 다음 탐험으로 가자!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "좋아! 그러면 이번에는 퀴즈를 낼게. (이름) 탐험가도 한 번 찾아봐!", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "해버미", text: "움... 또 퀴즈야? 오늘 퀴즈는 풀만큼 푼 거 같은데...", img: imgNormal, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "조용히 해 해버미야 담당자도 아이디어의 한계가 있는거야", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "(이름) 탐험가! 이 배는 아주 거대한 대형 범선으로 ‘정화의 원정’에 참여했어. 과연 어느 나라의 배일까?", img: img4f_5bosunsill, imgWidth: "85%", imgBottom: "45%", quiz: "zhenghe_choice" },
    { speaker: "타미", text: "정답! 바로 중국의 배, '정화보선'야. 배 머리에 커다란 눈이 그려진 게 아주 인상적이지?", img: img4f_5bosun, imgWidth: "90%", imgBottom: "40%" },
    { speaker: "타미", text: "중국사람들은 배를 살아있는 생명이라 믿어서 배 스스로 앞을 보고 위험을 피하라고 눈을 달아줬대!", img: img4f_5bosunpaint, imgWidth: "90%", imgBottom: "40%" },
    { speaker: "해버미", text: "배에 눈이 달려있다니 정말 신기해! 그런데 타미야, 이런 커다란 배들은 어떻게 만들어?", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "아주 날카로운 질문이야 해버미! 옛날에는 배를 만든다고 하지 않고 '모은다'고 할 정도로 정성이 많이 들어갔지.", img: imgTamiShh, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "배를 만들기 위해선 아주 다양한 항해도구들이 필요했어. 그중에 딱 하나만 찾아볼까?", img: imgTamiNormal, imgWidth: "70%", imgBottom: "45%" },
    { speaker: "타미", text: "이 도구는 거친 나무를 매끈매끈하게 만들기 위해 꼭 필요한 도구야! 아마 이름을 들어본 적이 있을걸?", img: img4f_5daepaesill, imgWidth: "70%", imgBottom: "40%", quiz: "tool_choice" },
    { speaker: "타미", text: "딩동댕! 정답은 '대패'야! 우리 조상들은 대패로 나무를 다듬어 거친 바다에서도 잘 견디는 튼튼한 배를 만들었단다.", img: img4f_5daepae, imgWidth: "75%", imgBottom: "40%" },
    { speaker: "타미", text: "대패삼겹살도 얇잖아? 대패로 나무를 밀었을 때 나온 대팻밥처럼 생겨서 대패삼겹살이래", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%" },
    { id: "explore_no", speaker: "해버미", text: "우와! 드디어 항해관 탐험을 끝냈어! 정말 어려워서 (이름) 탐험가와 함께하지 않았다면 혼자서는 절대 못했을 거야.", img: imgProud, imgWidth: "60%", imgBottom: "45%", hidePrev: true },
    { speaker: "해버미", text: "정말 고마워 (이름) 탐험가, 그리고 타미도 도와줘서 정말 고마워!", img: imgSmile, imgWidth: "60%", imgBottom: "45%" },
    { speaker: "타미", text: "나도 너희랑 함께해서 너무 재미있었어! (이름) 탐험가, 다음에 박물관에서 또 만나자! 안녕~!", img: imgTamiJoy, imgWidth: "70%", imgBottom: "45%", isEnd: true }
];

const epilogueDialogs = [
    { speaker: "해버미", text: "우와! 드디어 박물관의 모든 탐험을 끝냈어!!", img: imgSmile },
    { speaker: "해버미", text: "(이름) 탐험가, 우리가 완성한 도감을 한 번 확인해 볼까?", img: imgTamiJoy },
    { speaker: "타미", text: "9개의 도감을 다 채우다니! (이름) 탐험가는 정말 멋있어!", img: imgTamiJoy, openBook: true }, // 🌟 여기서 도감이 열림!
    { speaker: "해버미", text: "정말 대단해! (이름) 친구는 이제 해박탐험단이 인정하는 최고의 탐험가야.", img: imgSmile },
    { speaker: "타미", text: "(이름) 탐험가! 탐험가만 알고 있어! 새로운 기획전시가 열린다면 새로운 탐험이 시작될지도 몰라!", img: imgTamiShh },
    { speaker: "타미", text: "그때는 어쩌면 또 다른 선물이 있을지도?!", img: imgTamiJoy },
    { speaker: "해버미", text: "그리고 어린이날을 맞아서 탐험가들에게 1층에서 선착순으로 해양교재를 나눠주고 있어", img: imgSmile },
    { speaker: "해버미", text: "선물을 받으려면 설문조사를 해야 해! 위대한 탐험가 증서를 받고, 설문조사를 완료해줘", img: imgProud },
    { speaker: "해버미", text: "그 소식 들었어? 해박탐험단장님이 (이름) 탐험가의 이야기를 듣고는 정식 탐험단원으로 임명하고 싶으시대!", img: imgSmile },
    { speaker: "해버미", text: "자, 이건 위대한탐험가 증서야! 사진으로 꼭 남겨둬! 짠~!", img: imgProud }
];

let cluesFound = { chart: false, compass: false, telescope: false };
const clueImages = {
    chart: "./images/4f_2maphint.webp",
    compassBg: "./images/4f_2compasshintt.webp",
    telescopeView: "./images/4f_2scopehint.webp"
};

function startStory() {
    const nameInput = document.getElementById("user-name-input");
    const name = nameInput ? nameInput.value : document.getElementById("username").value;

    if (!name) { showAlert("이름을 입력해주세요!"); return; }

    localStorage.removeItem("haebak_save_cards");
    localStorage.removeItem("my_selected_ship");
    for (let i = 2; i <= 5; i++) {
        localStorage.removeItem("clear_floor" + i);
    }

    localStorage.setItem("explorerName", name);

    document.getElementById("login-page").style.display = "none";
    document.getElementById("intro-screen").style.display = "flex";

    const header = document.getElementById("progress-header");
    if (header) {
        header.style.display = "flex";
        document.getElementById("header-name").innerText = name;
        updateProgress(); // 깔끔하게 22% (기본 2장)부터 시작!
    }

    typeWriter();
}

function typeWriter() {
    if (i < storyText.length) {
        document.getElementById("typewriter").textContent += storyText.charAt(i);
        i++; timer = setTimeout(typeWriter, 60);
    } else { setTimeout(skipIntro, 2000); }
}

function skipIntro() {
    clearTimeout(timer);
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("main-page").style.display = "block";
    currentFloor = 0; currentStep = 0;
    updateDialog();
}

function updateDialog() {
    const name = localStorage.getItem("explorerName") || "탐험가";

    // 1. 대사 & 이미지 세팅
    let currentDialogs = introDialogs;
    if (currentFloor === 2) currentDialogs = floor2Dialogs;
    if (currentFloor === 3) currentDialogs = floor3Dialogs;
    if (currentFloor === 4) currentDialogs = floorAquaDialogs;
    if (currentFloor === 5) currentDialogs = floor5Dialogs;
    if (currentFloor === 99) currentDialogs = epilogueDialogs; // 🌟 99층(에필로그) 추가!

    let info = currentDialogs[currentStep];
    let msg = info.text.replace("(이름)", name);

    if (info.openBook) {
        const bookModal = document.getElementById("encyclopedia-modal");
        const detailModal = document.getElementById("card-detail-modal"); // 상세 창 ID 확인 필요

        if (bookModal) {
            bookModal.style.display = "flex";
            bookModal.style.zIndex = "10000000"; // 도감 판
        }
        if (detailModal) {
            detailModal.style.zIndex = "10000001"; // 상세 카드는 도감보다 +1 더 높게!
        }
    }

    if (info.effect === "flash") {
        triggerWhiteFlash();
    }

    document.getElementById("speaker-name").innerText = info.speaker;
    if (info.speaker === "타미") document.getElementById("speaker-name").style.color = "#ffd54f";
    else if (info.speaker === "해버미") document.getElementById("speaker-name").style.color = "#ffab91";
    else document.getElementById("speaker-name").style.color = "#ffffff";

    document.getElementById("dialog-text").innerText = msg;

    const targetImg = document.getElementById("haebeomi-img");
    if (targetImg) {
        // 🌟 [추가된 절대 방어막] 대화가 업데이트될 때마다 무조건 얼굴을 강제로 켭니다!
        targetImg.style.setProperty("display", "block", "important");
        targetImg.style.opacity = "1"; // 혹시라도 투명해졌을 상황을 대비해 100% 진하게!

        // 기존 코드
        targetImg.src = info.img;
        targetImg.style.width = info.imgWidth;
        targetImg.style.bottom = info.imgBottom;
    }

    const quizModal = document.getElementById("quiz-modal");
    const quizButtons = document.getElementById("quiz-buttons");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const imgArea = document.getElementById("quiz-image-container");
    const previewImg = document.getElementById("quiz-preview-img");

    if (quizModal) quizModal.style.display = "none";

    // 2. 단서 UI 및 특수 화면 전환
    const cluesUI = document.getElementById('clues-ui');
    const dBox = document.querySelector('.dialog-box');
    if (info.triggerClues) {
        if (cluesUI) cluesUI.style.display = 'flex';
        if (dBox) dBox.style.display = 'block';
        if (nextBtn) nextBtn.style.display = "none";
        if (prevBtn) prevBtn.style.display = "none";
        return;
    } else {
        if (cluesUI) cluesUI.style.display = 'none';
        if (dBox) dBox.style.display = 'block';
    }

    if (info.quiz === "ship_choice") {
        document.querySelector(".dialog-box").style.display = "none";
        document.getElementById("ship-choice-container").style.display = "block";
        return;
    }
    else if (info.quiz === "start_sailing") {
        document.querySelector(".dialog-box").style.display = "none";
        if (typeof startSailingGame === 'function') startSailingGame();
        return;
    }
    else if (info.quiz === "ship_silhouette") {
        document.querySelector(".dialog-box").style.display = "none";
        document.getElementById("ship-quiz-container").style.display = "block";
        if (typeof shipData !== 'undefined' && currentSelectedShip) {
            document.getElementById("ship-silhouette").src = shipData[currentSelectedShip].silhouette;
        }
        return;
    }

    // ==========================================
    // 🌟 3. 나으리의 소중한 퀴즈 세팅 (안전하게 복구됨!) 🌟
    // ==========================================
    if (info.quiz === "mascot") {
        // 🌟 마스코트 실루엣 띄우기 (해마 잔상 덮어쓰기!)
        if (imgArea) {
            imgArea.style.display = "block";
            previewImg.src = typeof img2f_mascotsill !== 'undefined' ? img2f_mascotsill : "";
        }
        document.getElementById("quiz-title").innerText = "단원들은 머리에 뭘 쓰고 있을까요?";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="checkAnswer('mascot', 1)">1. 모자</button><button class="quiz-btn" onclick="checkAnswer('mascot', 2)">2. 야구공</button><button class="quiz-btn" onclick="checkAnswer('mascot', 3)">3. 나뭇잎</button>`;

    } else if (info.quiz === "sub") {
        // 🌟 잠수정 실루엣 띄우기 (해마 잔상 덮어쓰기!)
        if (imgArea) {
            imgArea.style.display = "block";
            previewImg.src = typeof img2f_250sill !== 'undefined' ? img2f_250sill : "";
        }
        document.getElementById("quiz-title").innerText = "단원들은 어떤 잠수정을 찾고 있을까요?";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="checkAnswer('sub', 1)">1. 바다 250</button><button class="quiz-btn" onclick="checkAnswer('sub', 2)">2. 해양 250</button><button class="quiz-btn" onclick="checkAnswer('sub', 3)">3. 심해 250</button>`;
    } else if (info.quiz === "seahorse") {
        // 🌟 [추가된 핵심 코드] 이미지 영역을 켜고, 해마 실루엣으로 덮어씌웁니다! (대패 쫓아내기)
        if (imgArea) {
            imgArea.style.display = "block";
            previewImg.src = typeof img3f_seahorsesill !== 'undefined' ? img3f_seahorsesill : "";
        }

        document.getElementById("quiz-title").innerText = "수컷이 출산하는 이 생물은?";
        quizButtons.innerHTML = `
            <input type="text" id="subjective-input" class="quiz-input" placeholder="000 해마">
            <button class="quiz-btn" onclick="checkSubjective('seahorse')">✔️ 정답 확인</button>
            <button class="quiz-btn" style="background:#fff9c4; color:#f57f17; border-color:#f57f17; margin-top:10px;" onclick="if(typeof showHint==='function') showHint(img3f_aquamaphint)">💡 힌트 보기</button>
        `;

    } else if (info.quiz === "tami_reason") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "타미의 질문에 대답해주세요.";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="checkAnswer('tami_reason', 1)">해버미를 도와 도감을 만들고 있어</button><button class="quiz-btn" onclick="checkAnswer('tami_reason', 2)">해버미가 아스트롤라베를 잃어버려서 찾아주려고 해</button>`;
    } else if (info.quiz === "astrolabe_year") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "아스트롤라베는 언제 만들어졌을까요?";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="checkAnswer('astrolabe_year', 1)">1. 1443년</button><button class="quiz-btn" onclick="checkAnswer('astrolabe_year', 2)">2. 1543년</button><button class="quiz-btn" onclick="checkAnswer('astrolabe_year', 3)">3. 1643년</button>`;
    } else if (info.quiz === "continue_explore") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "계속해서 탐험을 진행할까요?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('continue_explore', 1)">1. 응 할래!</button>
            <button class="quiz-btn" onclick="checkAnswer('continue_explore', 2)">2. 아니야 다음에 할게!</button>
        `;
    } else if (info.quiz === "start_shooting_game") {
        document.getElementById("quiz-title").innerText = "크라켄이 나타났다! 조선 바다를 지켜내자!";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="if(typeof startShootingGame==='function') startShootingGame()">네! 출격하겠습니다!</button>`;
    } else if (info.quiz === "zhenghe_choice") {
        if (imgArea) { imgArea.style.display = "block"; previewImg.src = typeof img4f_5bosunsill !== 'undefined' ? img4f_5bosunsill : ""; }
        document.getElementById("quiz-title").innerText = "배를 찾아봐! 이 배는 어느 나라의 배일까?";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="checkAnswer('zhenghe_choice', 1)">1. 중국</button><button class="quiz-btn" onclick="checkAnswer('zhenghe_choice', 2)">2. 일본</button><button class="quiz-btn" onclick="checkAnswer('zhenghe_choice', 3)">3. 베트남</button>`;
    } else if (info.quiz === "tool_choice") {
        if (imgArea) { imgArea.style.display = "block"; previewImg.src = typeof img4f_5daepaesill !== 'undefined' ? img4f_5daepaesill : ""; }
        document.getElementById("quiz-title").innerText = "매끈매끈! 이 도구는 무엇일까요?";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="checkAnswer('tool_choice', 1)">1. 자귀</button><button class="quiz-btn" onclick="checkAnswer('tool_choice', 2)">2. 대패</button><button class="quiz-btn" onclick="checkAnswer('tool_choice', 3)">3. 깎낫</button>`;
    } else if (info.quiz === "tongshinsa_quiz") {
        if (imgArea) { imgArea.style.display = "block"; previewImg.src = typeof img3f_1tongshinflag !== 'undefined' ? img3f_1tongshinflag : ""; }
        document.getElementById("quiz-title").innerText = "통신사의 대장을 무엇이라고 불렀을까?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('tongshinsa_quiz', 1)">1. 正使정사</button>
            <button class="quiz-btn" onclick="checkAnswer('tongshinsa_quiz', 2)">2. 五使오사</button>
            <button class="quiz-btn" onclick="checkAnswer('tongshinsa_quiz', 3)">3. 止使지사</button>
        `;
    } else if (info.quiz === "tongshinsa_why") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "부사의 질문에 뭐라고 대답할까?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('tongshinsa_why', 1)">해버미를 도와 박물관 도감을 완성하고 있어!</button>
            <button class="quiz-btn" onclick="checkAnswer('tongshinsa_why', 2)">해버미랑 엄청 큰 통신사선을 보고 있었는데...</button>
        `;
    } else if (info.quiz === "guirodo_find") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "부사의 질문에 뭐라고 대답할까?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('guirodo_find', 1)">응 찾았어!</button>
            <button class="quiz-btn" onclick="checkAnswer('guirodo_find', 2)">오냐 찾았느니라!</button>
        `;
    } else if (info.quiz === "guirodo_quiz") {
        if (imgArea) { imgArea.style.display = "block"; previewImg.src = typeof img3f_2guirodo !== 'undefined' ? img3f_2guirodo : ""; }
        document.getElementById("quiz-title").innerText = "귀로도중도는 어디에서 어디까지의 여정을 그렸을까요?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('guirodo_quiz', 1)">1. 한양에서 베이징(중국)까지</button>
            <button class="quiz-btn" onclick="checkAnswer('guirodo_quiz', 2)">2. 사이공(베트남)에서 부산까지</button>
            <button class="quiz-btn" onclick="checkAnswer('guirodo_quiz', 3)">3. 에도(일본)에서 조선까지</button>
        `;
    } else if (info.quiz === "traderham_who") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "뭐라고 대답할까?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('traderham_who', 1)">누구세요?</button>
            <button class="quiz-btn" onclick="checkAnswer('traderham_who', 2)">너는 또 누구인고?</button>
        `;
    } else if (info.quiz === "goods_what") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "뭐라고 대답할까?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('goods_what', 1)">도감을 채우려고 왔어!</button>
            <button class="quiz-btn" onclick="checkAnswer('traderham_who', 2)">물건을 좀 사러왔네</button>
        `;
    } else if (info.quiz === "goods_what2") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "뭐라고 대답할까?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('goods_what2', 1)">그래서 물건이 뭐야?</button>
        `;
    } else if (info.quiz === "quiz_fan") {
        if (imgArea) { imgArea.style.display = "block"; previewImg.src = typeof img3f_3fansill !== 'undefined' ? img3f_3fansill : ""; }
        document.getElementById("quiz-title").innerText = "무역상이 잃어버린 물건의 이름은 무엇일까?";
        quizButtons.innerHTML = `
            <input type="text" id="subjective-input" class="quiz-input" placeholder="0 0 0 0">
            <button class="quiz-btn" onclick="checkAnswer('quiz_fan')">✔️ 정답 확인</button>
        `;
    } else if (info.quiz === "artifact_choice") {
        if (typeof askArtifactChoice === 'function') askArtifactChoice();
    } else if (info.quiz === "seawomen_who") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "뭐라고 대답할까?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('seawomen_who', 1)">무역상 해버미 소개 받고 왔어요</button>
            <button class="quiz-btn" onclick="checkAnswer('seawomen_who', 2)">여기가면 도감을 채울 수 있다고 들었어요</button>
        `;
    } else if (info.quiz === "seawomen_find") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "해녀를 불러보자";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="checkAnswer('seawomen_find', 1)">저기 혹시 해...녀님?</button>`;
    } else if (info.quiz === "haenyeo_tool1") {
        document.getElementById("quiz-title").innerText = "물질에 필요한 첫 번째 도구는?";
        quizButtons.innerHTML = `
            <div style="display: flex; justify-content: space-around; gap: 10px; margin-top: 10px;">
                <button class="choice-btn" style="padding:10px; flex: 1; border-radius:10px;" onclick="checkAnswer('haenyeo_tool1', 1)">
                    <img src="${typeof img3f_4taewak !== 'undefined' ? img3f_4taewak : ''}" style="width:100%; height:100px; object-fit:contain; margin-bottom:10px;"><br>1. 테왁망사리
                </button>
                <button class="choice-btn" style="padding:10px; flex: 1; border-radius:10px;" onclick="checkAnswer('haenyeo_tool1', 2)">
                    <img src="${typeof img3F_4bbulbae !== 'undefined' ? img3F_4bbulbae : ''}" style="width:100%; height:100px; object-fit:contain; margin-bottom:10px;"><br>2. 뻘배
                </button>
            </div>
        `;
    } else if (info.quiz === "haenyeo_tool2") {
        document.getElementById("quiz-title").innerText = "전복을 잡을 때 필요한 두 번째 도구?";
        quizButtons.innerHTML = `
            <div style="display: flex; justify-content: space-around; gap: 10px; margin-top: 10px;">
                <button class="choice-btn" style="padding:10px; flex: 1; border-radius:10px;" onclick="checkAnswer('haenyeo_tool2', 1)">
                    <img src="${typeof img3f_4muzawi !== 'undefined' ? img3f_4muzawi : ''}" style="width:100%; height:100px; object-fit:contain; margin-bottom:10px;"><br>1. 무자위
                </button>
                <button class="choice-btn" style="padding:10px; flex: 1; border-radius:10px;" onclick="checkAnswer('haenyeo_tool2', 2)">
                    <img src="${typeof img3f_4bitchang !== 'undefined' ? img3f_4bitchang : ''}" style="width:100%; height:100px; object-fit:contain; margin-bottom:10px;"><br>2. 빗창
                </button>
            </div>
        `;
    } else if (info.quiz === "haenyeo_tool3") {
        document.getElementById("quiz-title").innerText = "바닷속을 잘 보려면 어떤 도구가 필요할까?";
        quizButtons.innerHTML = `
            <div style="display: flex; justify-content: space-around; gap: 10px; margin-top: 10px;">
                <button class="choice-btn" style="padding:10px; flex: 1; border-radius:10px;" onclick="checkAnswer('haenyeo_tool3', 1)">
                    <img src="${typeof img3f_4seaglass !== 'undefined' ? img3f_4seaglass : ''}" style="width:100%; height:100px; object-fit:contain; margin-bottom:10px;"><br>1. 물안경
                </button>
                <button class="choice-btn" style="padding:10px; flex: 1; border-radius:10px;" onclick="checkAnswer('haenyeo_tool3', 2)">
                    <img src="${typeof img3f_4gim !== 'undefined' ? img3f_4gim : ''}" style="width:100%; height:100px; object-fit:contain; margin-bottom:10px;"><br>2. 김 건조발
                </button>
            </div>
        `;
    } else if (info.quiz === "start_diving_game") {
        document.getElementById("quiz-title").innerText = "전복 따기 미니게임을 시작할까요?";
        quizButtons.innerHTML = `<button class="quiz-btn" onclick="if(typeof showDivingTutorial==='function') showDivingTutorial()">네! 준비됐어요!</button>`;
    } else if (info.quiz === "haebumi_find") {
        if (imgArea) { imgArea.style.display = "none"; }
        document.getElementById("quiz-title").innerText = "뭐라고 대답할까?";
        quizButtons.innerHTML = `
            <button class="quiz-btn" onclick="checkAnswer('haebumi_find', 1)">너 방금 전 까지 해녀였는데?!</button>
            <button class="quiz-btn" onclick="checkAnswer('haebumi_find', 2)">시공간이 꼬여서 우리 같이 과거에 다녀왔어</button>
        `;
    }
    // ==========================================
    // 🌟 4. 버튼 조작 로직 (에러 원인 완벽 제거!) 🌟
    // ==========================================

    nextBtn.onclick = nextDialog;

    if (currentStep === currentDialogs.length - 1 && currentFloor >= 2) {
        nextBtn.style.display = "block";

        // 🌟 [수정됨] 만약 99층(에필로그)이라면?
        if (currentFloor === 99) {
            nextBtn.innerHTML = "탐험증 받기🎉";
            nextBtn.onclick = function () {
                document.querySelector(".dialog-box").style.display = "none";
                showFinalCertificate(); // 🌟 드디어 진짜 임명장 출격!
            };
        }
        // 🌟 기존 층(2~5층)이라면?
        else {
            nextBtn.innerHTML = "탐험 완료!";
            nextBtn.onclick = showFloorClear;
        }
    }

    else if (info.quiz) {
        nextBtn.style.display = "none";

        if (info.quiz === "start_shooting_game") {
            nextBtn.style.display = "block";
            nextBtn.innerHTML = "전투 준비 ⚔️";
            nextBtn.onclick = function () { document.querySelector(".dialog-box").style.display = "none"; startShootingGame(); };
        }
        else if (info.quiz === "start_diving_game") {
            nextBtn.style.display = "block";
            nextBtn.innerHTML = "전복 따기 🦪";
            nextBtn.onclick = function () { document.querySelector(".dialog-box").style.display = "none"; openDivingGame(); };
        }
        else if (info.quiz === "artifact_choice") {
            nextBtn.style.display = "none";
        }
        else {
            nextBtn.style.display = "block";

            if (info.quiz === "tongshinsa_why" || info.quiz === "traderham_who" || info.quiz === "guirodo_find" || info.quiz === "goods_what" || info.quiz === "goods_what2" || info.quiz === "seawomen_who" || info.quiz === "seawomen_find" || info.quiz === "haebumi_find") {
                nextBtn.innerHTML = "대답하기 💬";
            } else {
                nextBtn.innerHTML = "퀴즈 풀기 🔍";
            }

            nextBtn.onclick = function () {
                const dialog = document.querySelector(".dialog-box");
                if (dialog) dialog.style.display = "none";

                if (info.quiz === "ceramic_choice") {
                    const ceramicBox = document.getElementById("ceramic-quiz-container");
                    if (ceramicBox) ceramicBox.style.display = "block";
                }
                else if (info.quiz === "ceramic_diff") {
                    const diffBox = document.getElementById("diff-game-container");
                    if (diffBox) diffBox.style.display = "block";
                }
                else {
                    const qModal = document.getElementById("quiz-modal");
                    if (qModal) qModal.style.display = "flex";
                }
            };
        }
    }
    else {
        nextBtn.style.display = "block";
        nextBtn.innerHTML = "다음 ▶";
    }

    if (info.hidePrev) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
        prevBtn.style.visibility = (currentStep === 0) ? "hidden" : "visible";
    }
    // 🌟 튜토리얼(0층) 전용 연출기 실행
    if (currentFloor === 0) {
        // 인트로 중에는 무조건 '다음' 버튼 활성화 및 기능 고정
        const nextBtn = document.getElementById("next-btn");
        nextBtn.style.display = "block";
        nextBtn.onclick = nextDialog;
        nextBtn.innerHTML = (currentStep === introDialogs.length - 1) ? "탐험 시작⚓" : "다음 ▶";

        // 해버미 숨기기 (튜토리얼 구간 step 4~8)
        const targetImg = document.getElementById("haebeomi-img");
        if (currentStep >= 4 && currentStep <= 8) {
            if (targetImg) targetImg.style.opacity = "0";
        } else {
            if (targetImg) targetImg.style.opacity = "1";
        }
        if (currentStep !== 7) {
            nextBtn.style.display = "block";
        }

        applyTutorial(currentStep);
    }
}

function checkAnswer(quizType, answer) {
    // 1. 마스코트 & 잠수정
    if (quizType === "mascot" && answer === 1) {
        showAlert("정답! 탐험가의 모자를 쓴 둥둥, 뿌뿌, 랑랑이었어!");
        document.getElementById("quiz-modal").style.display = "none";
        unlockCard("card-2f-1", "둥둥 뿌뿌 랑랑", imgM2f_mascot, "어린이박물관을 지키는 귀여운 마스코트 친구들");
        currentStep++; updateDialog();
    }
    else if (quizType === "sub" && answer === 2) {
        showAlert("정답! 멋진 노란색 잠수정 '해양250'을 찾았어!");
        document.getElementById("quiz-modal").style.display = "none";
        unlockCard("card-2f-2", "해양-250", img2f_250, "우리나라 기술로 만든 최초의 유인잠수정, 바닷 속 250m까지 들어갈 수 있다.");
        currentStep++; updateDialog();
    }
    // 2. 통신사 퀴즈들
    else if (quizType === 'tongshinsa_quiz') {
        if (answer === 1) {
            showAlert("정답이야! 정사(正使)는 통신사를 이끈 일종의 외교관이지!");
            closeQuizAndNext();
        } else {
            showAlert("앗, 다시 한 번 깃발 속 한자를 잘 살펴봐!");
        }
    }
    else if (quizType === "tongshinsa_why") {
        let reactionStep = floor3Dialogs.find(s => s.id === "busa-reaction");
        if (reactionStep) {
            reactionStep.text = (answer === 1) ? "도감? 훈련도감? 대감 지금 출발해야하는데 무슨 소리세요!" : "배를 구경할 때가 아닙니다! 이제 곧 출발하실 시간이라구요!";
        }
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";
        currentStep++; updateDialog();
    }
    else if (quizType === "guirodo_find") {
        let reactionStep = floor3Dialogs.find(s => s.id === "busa-reaction2");
        if (reactionStep) {
            reactionStep.text = (answer === 1) ? "좋습니다! 찾으셨군요!" : "예! 정사대감께 이정도야 쉽죠!!";
        }
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";
        currentStep++; updateDialog();
    }
    else if (quizType === 'guirodo_quiz') {
        if (answer === 3) {
            showAlert("맞습니다! 통신사는 조선과 일본을 오갔죠!");
            closeQuizAndNext();
        } else {
            showAlert("전시설명을 다시 한 번 살펴주세요!");
        }
    }
    // 3. 무역상 해버미 구간
    else if (quizType === "traderham_who") {
        let reactionStep = floor3Dialogs.find(s => s.id === "trader-reaction");
        if (reactionStep) {
            reactionStep.text = "헤헤 접니다 저! 최고의 무역상 해버미!";
        }
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";
        currentStep++; updateDialog();
    }
    else if (quizType === "goods_what") {
        let reactionStep = floor3Dialogs.find(s => s.id === "trader-reaction2");
        if (reactionStep) {
            reactionStep.text = "아유 잘오셨네 잘오셨어! 그거라면 요즘 이게 최고에요!";
        }
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";
        currentStep++; updateDialog();
    }
    else if (quizType === "goods_what2") {
        let reactionStep = floor3Dialogs.find(s => s.id === "trader-reaction3");
        if (reactionStep) {
            reactionStep.text = "바로 그건 말입니다!...어... 물건..이 어디갔지?";
        }
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";
        currentStep++; updateDialog();
    }
    else if (quizType === "quiz_fan") {
        const answerInput = document.getElementById("subjective-input").value.trim().replace(/\s+/g, "");
        if (answerInput === "나전부채") {
            showAlert("대감마님! 찾아주셨군요!!");
            unlockCard("card-3f-1", "나전부채", img3f_3fan, "영롱한 빛깔을 뽐내는 아름다운 나전부채.");
            let reactionStep = floor3Dialogs.find(s => s.id === "fan-reaction");
            if (reactionStep) reactionStep.text = "아이고! 맞습니다! 나전부채가 맞아요ㅜㅜ!";
            document.getElementById("quiz-modal").style.display = "none";
            document.querySelector(".dialog-box").style.display = "block";
            currentStep++; updateDialog();
        } else {
            showAlert("힌트: 전시장에 00부채가 어딘가에 있을거에요00이 뭐지?");
        }
    }
    else if (quizType === "seawomen_find") {
        let reactionStep = floor3Dialogs.find(s => s.id === "seawomen_reaction");
        if (reactionStep) {
            reactionStep.text = "어마나 깜짝아";
        }
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";
        currentStep++; updateDialog();
    }
    else if (quizType === "seawomen_who") {
        let reactionStep = floor3Dialogs.find(s => s.id === "seawomen_reaction2");
        if (reactionStep) {
            reactionStep.text = "어? 아?! 아아!! 맞나! 도감을 채우고 있다면서? 이야기 들었다!";
        }
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";
        currentStep++; updateDialog();
    }
    else if (quizType === "haebumi_find") {
        let reactionStep = floor3Dialogs.find(s => s.id === "haebumu_reaction");

        if (reactionStep) {
            if (answer === 1) {
                reactionStep.text = "응 무슨 소리야? 난 그냥 평범한 해버미인데...";
            } else {
                reactionStep.text = "시공간?! 꼬여?! 과거?! 잉?!";
            }
        }

        // 2. 퀴즈창 닫고 대화창 열기
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";

        // 3. 🌟 [가장 중요] 한 칸 뒤인 'haebumu_reaction'으로 이동한 뒤 화면을 새로고침!
        currentStep++;
        updateDialog();
    }
    else if (quizType === 'haenyeo_tool1') {
        if (answer === 1) {
            showAlert("맞다! 물질해서 잡은 해산물은 테왁망사리에 담으면 된다");
            document.getElementById("quiz-modal").style.display = "none";
            currentStep++; updateDialog();
        } else {
            showAlert("뻘배는 물 안이 아니고 물 밖, 갯벌서 꼬막을 채취할 때 탄다");
        }
    }
    else if (quizType === 'haenyeo_tool2') {
        if (answer === 2) {
            showAlert("맞다! 전복은 힘이 장사라서 빗창없이는 못잡는다고 봐야한다.");
            document.getElementById("quiz-modal").style.display = "none";
            currentStep++; updateDialog();
        } else {
            showAlert("무자위는 염전에서 물을 끌어올릴 때 쓴다");
        }
    }
    else if (quizType === 'haenyeo_tool3') {
        if (answer === 1) {
            showAlert("맞다! 물안경만 있으면 물에서도 잘 볼 수 있거든");
            document.getElementById("quiz-modal").style.display = "none";
            currentStep++; updateDialog();
        } else {
            showAlert("김 건조발은 김을 말릴 때 쓴다");
        }
    }
    else if (quizType === "tami_reason") {
        let reactionStep = floor5Dialogs.find(s => s.id === "tami-reaction");
        if (answer === 1) {
            reactionStep.text = "그래 너 도감 또 잃어버렸지?! 안그래도 탐험단장님이 너 찾는다고 난리야";
        } else {
            reactionStep.text = "아스트롤라베? 으휴 해버미 너 또 잃어버렸어?! 하여간...";
        }
        document.getElementById("quiz-modal").style.display = "none";
        currentStep++; updateDialog();
    }
    else if (quizType === "astrolabe_year") {
        if (answer === 3) {
            showAlert("정답! 1643년에 만들어진 유물이야!");
            document.getElementById("quiz-modal").style.display = "none";
            unlockCard("card-4f-1", "아스트롤라베", img4f_2astroalabe, "1643년 네덜란드에서 만들어진 천문 관측 도구!");
            currentStep++; updateDialog();
        } else {
            showAlert("아쉽지만 틀렸어! 다시 한 번 잘 생각해봐!");
        }
    }

    else if (quizType === "continue_explore") {
        document.getElementById("quiz-modal").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block"; // 대화창 복구

        if (answer === 1) {
            currentStep++;
        } else if (answer === 2) {
            const targetIdx = floor5Dialogs.findIndex(d => d.id === "explore_no");
            if (targetIdx !== -1) {
                currentStep = targetIdx;
            } else {
                currentStep = floor5Dialogs.length - 1;
            }
        }
        updateDialog();
    }
    else if (quizType === 'zhenghe_choice') {
        if (answer === 1) {
            showAlert("타미: 정답이야! 역시 " + name + " 탐험가의 눈썰미는 대단해!");
            closeQuizAndNext();
        } else {
            showAlert("해버미: 뱃머리에 눈이 달려있어! 자세히 찾아봐봐!");
        }
    }
    else if (quizType === 'tool_choice') {
        if (answer === 2) {
            showAlert("타미: 딩동댕! 대패로 나무를 다듬어야 튼튼한 배가 될 수 있지!");
            closeQuizAndNext();
        } else {
            showAlert("타미: 항해도구가 모여있는 곳 어딘가에 이 유물이 숨어있어 잘 살펴봐!");
        }
    }
    else {
        showAlert("앗, 다시 한 번 전시물을 자세히 살펴볼까?");
    }
}

// 💾 1. 도감 저장 함수 (카드를 얻거나 층을 깰 때 실행)
function saveGame() {
    if (typeof cardData !== 'undefined') {
        localStorage.setItem("haebak_save_cards", JSON.stringify(cardData));
    }
    // 🌟 저장할 때마다 달성률 게이지도 같이 끌어올립니다!
    updateProgress();
}

// 🔄 저장된 데이터 불러오기 및 화면 복구
function loadGame() {
    const savedCards = JSON.parse(localStorage.getItem("haebak_save_cards"));
    if (savedCards) {
        Object.keys(savedCards).forEach(key => {
            cardData[key] = savedCards[key];
        });

        // 불러온 데이터를 바탕으로 도감 UI를 다시 그립니다.
        for (let cardId in savedCards) {
            if (cardId === 'my_selected_ship') {
                let chosenShip = savedCards[cardId]; // 'viking', 'cuttysark' 등
                let shipSlot = document.getElementById("card-4f-2");

                // 세이브 파일이나 원본 데이터에서 배 정보를 꺼내옵니다.
                let shipInfo = savedCards[chosenShip] || cardData[chosenShip];

                if (shipSlot && shipInfo) {
                    shipSlot.classList.add("found");
                    shipSlot.innerHTML = `<img src="${shipInfo.img}" alt="${shipInfo.title}">${shipInfo.title}`;
                    shipSlot.onclick = function () { showCardDetail(chosenShip); };
                }
                continue; // 배 그렸으니 다음으로 패스!
            }

            // 🚨 2. 주머니에 대기 중인 기본 배 3인방 데이터는 무시!
            if (cardId === 'cuttysark' || cardId === 'victoria' || cardId === 'viking') {
                continue;
            }

            // 🌟 3. 일반 유물 필터링 (VIP를 다 들여보낸 후, 여기서 가짜를 걸러냅니다!)
            if (!savedCards[cardId].img) continue;

            // 4. 진짜 얻은 일반 유물 복구
            let cardEl = document.getElementById(cardId);
            if (cardEl) {
                const info = savedCards[cardId];
                cardEl.classList.add("found");
                cardEl.innerHTML = `<img src="${info.img}" alt="${info.title}">${info.title}`;
                cardEl.onclick = function () { showCardDetail(cardId); };
            }
        }

        console.log("⚓ 이전 탐험 기록을 불러왔습니다!");
        updateProgress(); // 게이지 갱신 (잊지 마셔요!)
    }
}

// 2) 맵(층) 도장 복구하기
for (let i = 2; i <= 5; i++) {
    if (localStorage.getItem("clear_floor" + i) === "true") {
        let btn = document.querySelector(`button[onclick='startMission(${i})']`);
        if (btn) {
            // 도장 찍고 버튼 비활성화 (이미지 경로는 나으리의 imgStamp 변수에 맞게 확인 필요)
            btn.innerHTML += ` <img src='${imgStamp}' style='height:25px; vertical-align:middle;'>`;
            btn.style.backgroundColor = "#e0e0e0";
            btn.onclick = function () { showAlert("이미 도감을 모두 찾은 층이야!"); };
        }
    }
}


// 💥 3. 게임 새로하기 (데이터 초기화)
function resetGame() {
    if (confirm("정말 처음부터 다시 탐험하시겠습니까? 모아둔 도감이 모두 사라집니다!")) {
        localStorage.removeItem("explorerName");
        localStorage.removeItem("haebak_cards");
        localStorage.removeItem("clear_floor2");
        localStorage.removeItem("clear_floor3");
        localStorage.removeItem("clear_floor4");
        localStorage.removeItem("clear_floor5");
        localStorage.removeItem("clear_floor99");
        location.reload(); // 화면 새로고침
    }
}

function showClue(type) {
    const clueModal = document.getElementById('clue-modal');
    const clueModalImg = document.getElementById('clue-modal-img');
    const compassView = document.getElementById('compass-view');
    const clueDialog = document.getElementById('clue-dialog');
    const clueText = document.getElementById('clue-dialog-text');
    const marker = document.getElementById('target-marker');
    const needle = document.getElementById('compass-needle');

    const mainDialog = document.querySelector('.dialog-box');
    if (mainDialog) mainDialog.style.setProperty("display", "none", "important");

    clueModal.style.display = "flex";
    clueModalImg.style.display = "none";
    compassView.style.display = "none";
    clueDialog.style.display = "block";

    if (type === 'chart') {
        clueModalImg.src = "./images/4f_2maphint.webp";
        clueModalImg.style.display = "block";
        clueText.innerText = "‘바다의 길잡이’ 전시실의 모습이야! 제대로 찾아왔어? 이곳 어딘가에 아스트롤라베가 숨어있어!";
    } else if (type === 'telescope') {
        clueModalImg.src = "./images/4f_2scopehint.webp";
        clueModalImg.style.display = "block";
        clueText.innerText = "망원경으로 아스트롤라베를 본 적이 있어!";
    } else if (type === 'compass') {
        compassView.style.display = "block";
        compassView.style.backgroundImage = "url('./images/4f_2compasshint.webp')";

        // 🌟 1. 수정된 암전 마법: 나침반은 내버려두고 '배경 사진'에만 까만 셀로판지를 씌웁니다!
        compassView.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // 90%짜리 까만색 배경
        compassView.style.backgroundBlendMode = "multiply"; // 까만색과 배경 사진을 섞음!
        compassView.style.transition = "none";

        clueText.innerText = "음... 나침반이 어딘가를 가리키고 있는데?";

        marker.style.display = 'none';
        needle.style.animation = 'none';

        let scanLine = compassView.querySelector('.scan-line');
        if (!scanLine) {
            scanLine = document.createElement('div');
            scanLine.className = 'scan-line';
            compassView.appendChild(scanLine);
        }
        scanLine.style.display = 'block';
        scanLine.style.animation = 'scanning 1.5s linear infinite';

        setTimeout(() => {
            needle.style.animation = 'needleSpinAndSettle 3.5s ease-out forwards';

            setTimeout(() => {
                scanLine.style.display = 'none';

                // 🌟 2. 암전 해제: 씌워뒀던 까만 셀로판지를 1.5초 동안 서서히 투명하게 만듭니다!
                compassView.style.transition = "background-color 1.5s ease-in-out";
                compassView.style.backgroundColor = "rgba(0, 0, 0, 0)"; // 투명해지면서 원래 사진이 짠!

                clueText.innerText = "오! 이 근처에서 강한 반응이! 이곳에 유물이 있는게 분명해!";

                marker.style.display = 'block';
                marker.style.animation = 'radar-pulse 2s infinite';
            }, 3500);
        }, 100);
    }

    document.getElementById(`btn-${type}`).classList.add('found');
    cluesFound[type] = true;
}

function closeClueModal() {
    document.getElementById('clue-modal').style.display = "none";
    const mainDialog = document.querySelector('.dialog-box');
    if (mainDialog) mainDialog.style.display = "block";
    if (cluesFound.chart && cluesFound.compass && cluesFound.telescope) {
        document.getElementById('clues-ui').style.display = "none";
        document.querySelector('.dialog-box').style.display = 'block';
        currentStep++;
        updateDialog();
    }
}

function showHint(imgSrc) {
    document.getElementById("hint-image").src = imgSrc;
    document.getElementById("hint-modal").style.display = "flex";
}
function hideHint() {
    document.getElementById("hint-modal").style.display = "none";
}

function unlockCard(cardId, title, img, desc) {
    let card = document.getElementById(cardId);
    if (card) {
        card.classList.add("found");
        card.innerHTML = `<img src="${img}" alt="${title}">${title}`;
        card.setAttribute("onclick", `showCardDetail('${cardId}')`);
        cardData[cardId] = { title: title, img: img, desc: desc };
        saveGame();
    }
    showToast(title);
}

function nextDialog() {
    if (typeof isSubStoryActive !== 'undefined' && isSubStoryActive === true) {
        if (currentSubStory === "finished") {
            isSubStoryActive = false;
            askArtifactChoice(true);
            return;
        }
        let script = currentSubStory === "najeon" ? script_najeon : script_baekja;
        if (script[subStoryIndex].quiz) return;

        subStoryIndex++;
        if (subStoryIndex < script.length) {
            playSubStory();
        }
        return;
    }

    let currentDialogs = introDialogs;
    if (currentFloor === 2) currentDialogs = floor2Dialogs;
    if (currentFloor === 3) currentDialogs = floor3Dialogs;
    if (currentFloor === 4) currentDialogs = floorAquaDialogs;
    if (currentFloor === 5) currentDialogs = floor5Dialogs;

    // 🌟 마지막 대사인지 확인하는 부분
    if (currentStep < currentDialogs.length - 1) {
        currentStep++;
        updateDialog();
        if (currentFloor === 1 || currentDialogs === introDialogs) {
            if (typeof applyTutorial === "function") applyTutorial(currentStep);
        }
    } else {
        // 🚨 [진범 검거!] 튜토리얼(1층) 대사가 끝난 거라면, 서약서를 띄우고 여기서 멈춰라!
        if (currentFloor === 1 || currentDialogs === introDialogs) {
            finishTutorial();
            return; // 🌟 아래에 있는 지도 켜기 로직을 실행하지 않고 서약서 대기로 넘어갑니다.
        }

        // --- ⬇️ 여기서부터는 원래 나으리가 짜두신 기존 코드 그대로 두시면 됩니다! ⬇️ ---
        // 대사가 끝났을 때! 메인 지도로 돌아가기
        document.getElementById("main-page").style.display = "none";
        document.getElementById("map-page").style.display = "block";

        if (currentFloor === 2) {
            showAlert("축하해! 2층 야외전시장 도감을 완성했어!");
            let btn = document.querySelector("button[onclick='startMission(2)']");
            if (btn) {
                btn.innerHTML = "2F 어린이박물관/야외전시장 <img src='" + imgStamp + "' style='height:25px; vertical-align:middle;'>";
                btn.style.backgroundColor = "#e0e0e0";
                btn.onclick = function () { showAlert("이미 도감을 모두 찾은 층이야!"); };
            }
        }
        // 🌟🌟 나으리가 말씀하신 3층 마무리를 여기에 추가!! 🌟🌟
        else if (currentFloor === 3) {
            showAlert("축하해! 3층 상설전시실 도감을 완성했어!");
            let btn = document.querySelector("button[onclick='startMission(3)']");
            if (btn) {
                // 3층 지도 버튼에 도장 찍기
                btn.innerHTML = "3F 상설전시실 <img src='" + imgStamp + "' style='height:25px; vertical-align:middle;'>";
                btn.style.backgroundColor = "#e0e0e0";
                btn.onclick = function () { showAlert("이미 도감을 모두 찾은 층이야!"); };
            }
        }
        // 기존 4층, 5층 로직
        else if (currentFloor === 4) {
            showAlert("축하해! 3층 수족관 도감을 완성했어!");
            let btn = document.querySelector("button[onclick='startMission(4)']");
            if (btn) {
                btn.innerHTML = "3F 수족관 <img src='" + imgStamp + "' style='height:25px; vertical-align:middle;'>";
                btn.style.backgroundColor = "#e0e0e0";
                btn.onclick = function () { showAlert("이미 도감을 모두 찾은 층이야!"); };
            }
        } else if (currentFloor === 5) {
            showAlert("축하해! 4층 상설전시실 항해관 도감을 완성했어!");
            let btn = document.querySelector("button[onclick='startMission(5)']");
            updateCompanionCard();
            if (btn) {
                btn.innerHTML = "4F 상설전시실 항해관 <img src='" + imgStamp + "' style='height:25px; vertical-align:middle;'>";
                btn.style.backgroundColor = "#e0e0e0";
                btn.onclick = function () { showAlert("이미 도감을 모두 찾은 층이야!"); };
            }
        }
    }
}

function prevDialog() {
    // 🌟 [방어막] 유물 설명(서브 스토리) 중일 때 '이전' 버튼을 누르면?
    if (typeof isSubStoryActive !== 'undefined' && isSubStoryActive === true) {

        // 혹시 퀴즈 창이 띄워져 있다면 닫기
        const quizModal = document.getElementById("quiz-modal");
        if (quizModal) quizModal.style.display = "none";

        // 정답을 맞춘 상태에서 이전을 누르면 다시 선택창으로 보냄
        if (currentSubStory === "finished") {
            isSubStoryActive = false;
            askArtifactChoice(true);
            return;
        }

        // 🌟 대사 순서를 하나 빼서 이전 대사로 돌아가기!
        if (subStoryIndex > 0) {
            subStoryIndex--;
            playSubStory();
        } else {
            // 맨 첫 대사에서 이전을 누르면? 유물 선택창으로 돌아가기!
            isSubStoryActive = false;
            askArtifactChoice(true);
        }
        return; // 메인 스토리로 안 넘어가게 여기서 끝!
    }

    // 👇 원래 메인 스토리의 이전 기능
    if (currentStep > 0) {
        currentStep--;
        updateDialog();
    }
}

function startMission(floor) {
    document.getElementById("map-page").style.display = "none";
    let mainPage = document.getElementById("main-page");

    if (floor === 2) {
        mainPage.style.backgroundImage = `linear-gradient(rgba(244, 241, 234, 0.4), rgba(244, 241, 234, 0.4)), url('${img2f_back}')`;
        mainPage.style.display = "block";
        currentFloor = 2; currentStep = 0; updateDialog();
    } else if (floor === 3) { // 3층 추가된 부분
        mainPage.style.backgroundImage = `linear-gradient(rgba(244, 241, 234, 0.4), rgba(244, 241, 234, 0.4)), url('${imgBg3F}')`;
        mainPage.style.display = "block";
        currentFloor = 3; currentStep = 0; updateDialog();
    } else if (floor === 4) {
        mainPage.style.backgroundImage = `linear-gradient(rgba(0, 30, 60, 0.6), rgba(0, 30, 60, 0.6)), url('${img3f_aquaback}')`;
        mainPage.style.display = "block";
        currentFloor = 4; currentStep = 0; updateDialog();
    } else if (floor === 5) {
        mainPage.style.backgroundImage = `linear-gradient(rgba(0, 30, 60, 0.4), rgba(0, 30, 60, 0.4)), url('${img4f_1back}')`;
        mainPage.style.display = "block";
        currentFloor = 5; currentStep = 0; updateDialog();
    } else if (floor === 99) {
        // 🌟 [추가] 에필로그 시작하자마자 친구 카드부터 업데이트!
        if (typeof updateCompanionCard === "function") {
            updateCompanionCard();
        }        // 🌟 [수정됨] 맵 페이지를 끄고 main-page를 살려야 대화창이 보입니다!
        const imgepilogueBg = "./images/epilogue_back.webp";
        document.getElementById("map-page").style.display = "none";
        let mainPage = document.getElementById("main-page");
        // 배경을 첫 지도 화면 느낌으로 덮어주어 지도인 척 연출합니다.
        mainPage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imgepilogueBg}')`;
        mainPage.style.display = "block";

        currentFloor = 99;
        currentStep = 0;

        const dBox = document.querySelector(".dialog-box");
        if (dBox) dBox.style.display = "block";

        updateDialog();
    }
    else {
        showAlert(floor + "층 탐험은 아직 준비 중이야!");
        document.getElementById("map-page").style.display = "block";
    }
}

function openBook() { document.getElementById("encyclopedia-modal").style.display = "flex"; }
function closeBook() { document.getElementById("encyclopedia-modal").style.display = "none"; }
function checkSubjective(quizType) {
    const userInput = document.getElementById("subjective-input").value.trim();
    const name = localStorage.getItem("explorerName");

    if (quizType === 'seahorse') {
        if (userInput.includes("빅밸리")) {
            showAlert("정답이야! " + name + " 탐험가! 해마는 수컷이 새끼를 낳는 신비로운 생물이지!");

            document.getElementById("quiz-modal").style.display = "none";
            document.querySelector(".dialog-box").style.display = "block";

            unlockCard("card-3f-aqua", "빅밸리해마", img3f_seahorse, "수컷이 육아주머니에서 새끼를 부활시키는 유일한 '어류' 생물, 꼬리를 이용해 해조류를 붙잡는다.");

            currentStep++;
            updateDialog();
        } else {
            showAlert("음... 다시 한번 잘 생각해봐! 힌트를 봐도 좋아.");
        }
    }
}
function triggerWhiteFlash() {
    const flashDiv = document.getElementById("flash-effect");

    // 애니메이션 초기화 (다시 실행하기 위한 필수 과정)
    flashDiv.classList.remove("flash-active");

    // 마법의 한 줄! (화면을 강제로 새로고침해서 클래스가 지워진 걸 인식하게 함)
    void flashDiv.offsetWidth;

    // 다시 애니메이션 클래스 붙이기
    flashDiv.classList.add("flash-active");
}
function hideCardDetail() { document.getElementById("card-detail-modal").style.display = "none"; }
let currentSelectedShip = "";
const shipData = {
    viking: {
        name: "바이킹",
        choiceName: "해적선",
        silhouette: "./images/4f_3vikingsill.webp",
        original: "./images/4f_3viking.webp",
        dot: "./images/4f_3vikingdot.webp",
        hint1: "이 배를 타던 해적들은 뿔 달린 투구를 쓰고 다녔대.",
        hint2: "그리곤 언제나 전투를 위해 방패를 주렁주렁 달고 다녔어",
        info: "바이킹선은 바닥이 납작해서 바다뿐 아니라 강도 거슬러 올라갈 수 있었어! 아주 무서웠다구!"
    },
    victoria: {
        name: "빅토리아",
        choiceName: "탐험선",
        silhouette: "./images/4f_3victoriasill.webp",
        original: "./images/4f_3victoria.webp",
        dot: "./images/4f_3victoriadot.webp",
        hint1: "이 배는 마젤란이 역사상 최초로 세계일주를 했을 때 탔던 배야!",
        hint2: "돛을 잘 봐봐 빨간 십자가가 그려져있어!",
        info: "빅토리아호가 세계를 한 바퀴 도는 데는 무려 3년이나 걸렸어! 엄청 고생했다구!"
    },
    cuttysark: {
        name: "커티삭",
        choiceName: "교역선",
        silhouette: "./images/4f_3cuttysill.webp",
        original: "./images/4f_3cutty.webp",
        dot: "./images/4f_3cuttydot.webp",
        hint1: "이 배는 아주 빠른 속도로 중국에서 영국으로 차(茶)를 나르던 배야.",
        hint2: "그래서일까? 전시실에 있는 배들 중에서 돛이 가장 많아!!",
        info: "티레이스라고 들어봤어? 커티삭은 가장 빠른 배를 겨루는 위대한 항해의 승리자였어!"
    }
};
function selectShip(shipType) {
    currentSelectedShip = shipType;
    const ship = shipData[shipType];

    document.getElementById("ship-choice-container").style.display = "none";
    document.querySelector(".dialog-box").style.display = "block";

    const answerBox = document.getElementById("ship-answer-box");

    if (shipType === 'victoria') {
        answerBox.placeholder = "0000호";
    } else if (shipType === 'viking') {
        answerBox.placeholder = "000선";
    } else if (shipType === 'cuttysark') {
        answerBox.placeholder = "000호";
    }

    answerBox.value = "";

    let reactionStep = floor5Dialogs[currentStep + 1];
    reactionStep.text = `오! ${ship.choiceName}을 찾으러 갈 거야? 좋아! 다른 배를 고르고 싶다면 이전 버튼을 눌러줘`;

    let hintStep1 = floor5Dialogs[currentStep + 2];
    hintStep1.text = `${ship.hint1}`;

    let hintStep2 = floor5Dialogs[currentStep + 3];
    hintStep2.text = `${ship.hint2}`;
    const infoStep = floor5Dialogs.find(step => step.id === "ship-deep-info");
    if (infoStep) {
        infoStep.text = `${ship.name}에 대해 더 알려줄게! ${ship.info}`;
    }

    currentStep++;
    updateDialog();
}

function checkShipQuiz() {
    const answerBox = document.getElementById("ship-answer-box");
    if (!answerBox) return;

    let userAnswer = answerBox.value.trim().replace(/\s/g, "").toLowerCase();
    const correctAnswer = shipData[currentSelectedShip].name.replace(/\s/g, "").toLowerCase();

    if (userAnswer.endsWith("호") || userAnswer.endsWith("선")) {
        userAnswer = userAnswer.slice(0, -1);
    }

    if (userAnswer === correctAnswer) {
        showAlert("해버미: 우와! 정확해! '" + shipData[currentSelectedShip].name + "'을(를) 완벽하게 찾았구나!");

        document.getElementById("ship-quiz-container").style.display = "none";
        document.querySelector(".dialog-box").style.display = "block";

        currentStep++;
        updateDialog();
    } else {
        showAlert("타미: 으음... 이름이 조금 다른 것 같아. 전시물의 이름표를 다시 한 번 꼼꼼히 확인해볼래?");
    }
}
let raceProgress = 0;
let bgOffset = 0; // <--- 범인 검거! 이게 있어야 배경이 밀립니다.
let gameActive = false;
let rival1Progress = 0;
let rival2Progress = 0;
let rivalTimer;
let lastTap = "";

function startSailingGame() {
    document.getElementById("sailing-game-container").style.setProperty("display", "block", "important");

    // 초기화
    raceProgress = 0; rival1Progress = 0; rival2Progress = 0; bgOffset = 0;
    gameActive = false; lastTap = "";

    const pShip = document.getElementById("player-ship");
    const r1Ship = document.getElementById("rival-ship-1");
    const r2Ship = document.getElementById("rival-ship-2");
    const buoy = document.getElementById("finish-buoy");
    const ocean = document.getElementById("game-ocean");

    // 🌟 [핵심] 여기서 HTML의 텅 빈 src에 배 그림을 쏙쏙 넣어줍니다!
    if (currentSelectedShip && shipData[currentSelectedShip]) {
        // 내 배 이미지 넣기
        pShip.src = shipData[currentSelectedShip].dot;

        // 내가 안 고른 나머지 두 배를 라이벌로 넣기
        const otherShips = Object.keys(shipData).filter(s => s !== currentSelectedShip);
        r1Ship.src = shipData[otherShips[0]].dot;
        r2Ship.src = shipData[otherShips[1]].dot;
    } else {
        // 혹시 배를 안 고르고 넘어왔을 때 에러 나지 않게 임시방편 (보험용)
        pShip.src = shipData['viking'].dot;
        r1Ship.src = shipData['victoria'].dot;
        r2Ship.src = shipData['cuttysark'].dot;
    }

    // 위치 초기화: 내 배는 50px 위치에 고정! (이전 로직에 맞춰 50px로 통일)
    if (pShip) pShip.style.left = "50px";
    if (r1Ship) r1Ship.style.left = "50px";
    if (r2Ship) r2Ship.style.left = "50px";

    // 배경과 부표도 리셋
    if (ocean) ocean.style.backgroundPosition = "0px bottom";
    if (buoy) buoy.style.right = "-200px";

    // 튜토리얼 띄우기
    document.getElementById("sailing-tutorial").style.display = "flex";
    document.getElementById("countdown-text").style.display = "none";
}

function startSailingCountdown() {
    // 설명서 닫기
    document.getElementById("sailing-tutorial").style.display = "none";

    let count = 3;
    const cdText = document.getElementById("countdown-text");
    cdText.style.display = "block";
    cdText.style.color = "#ffeb3b"; // 색상 리셋
    cdText.innerText = count;

    const cdInterval = setInterval(() => {
        count--;
        if (count > 0) cdText.innerText = count;
        else if (count === 0) cdText.innerText = "출발!";
        else {
            clearInterval(cdInterval);
            cdText.style.display = "none";
            gameActive = true;
            startRivalAI(); // 여기서 배들이 움직이기 시작!
        }
    }, 1000);
}

function movePlayer(direction) {
    if (!gameActive) return;

    if (direction !== lastTap) {
        raceProgress += 15;
        bgOffset -= 15; // 배경을 뒤로 밀기
        lastTap = direction;

        // 🌊 배경 밀기 (사파리 버그 수정한 버전)
        const ocean = document.getElementById("game-ocean");
        if (ocean) {
            // px 단위로 직접 밀어서 배가 전진하는 느낌을 줍니다.
            ocean.style.left = (bgOffset % window.innerWidth) + "px";
        }

        // 🚩 부표 등장 로직 (선생님이 좋아하시던 그 방식!)
        if (raceProgress > 800) {
            let buoyPos = 1000 - raceProgress; // 남은 거리
            const buoy = document.getElementById("finish-buoy");
            if (buoy) {
                // 부표가 화면 오른쪽 끝에서 슥 나타남
                buoy.style.right = (50 - buoyPos) + "px";
            }
        }
        checkRaceEnd();
    }
}

function startRivalAI() {
    if (rivalTimer) clearInterval(rivalTimer);
    rivalTimer = setInterval(() => {
        if (!gameActive) return;

        rival1Progress += (Math.random() * 3 + 1);
        rival2Progress += (Math.random() * 3 + 1);

        const r1 = document.getElementById("rival-ship-1");
        const r2 = document.getElementById("rival-ship-2");
        const pShip = document.getElementById("player-ship");

        // 🚢 상대적 위치 계산 (내 배 기준 50px에서 앞뒤로 움직임)
        if (pShip) pShip.style.left = "50px";
        if (r1) r1.style.left = (50 + (rival1Progress - raceProgress)) + "px";
        if (r2) r2.style.left = (50 + (rival2Progress - raceProgress)) + "px";

        checkRaceEnd();
    }, 100);
}

function checkRaceEnd() {
    const goal = 1000;
    if (raceProgress >= goal) {
        gameActive = false;
        clearInterval(rivalTimer);
        handleWin();
    } else if (rival1Progress >= goal || rival2Progress >= goal) {
        gameActive = false;
        clearInterval(rivalTimer);
        handleLose();
    }
}

function handleWin() {
    gameActive = false;
    if (rivalTimer) clearInterval(rivalTimer);

    if (!userInventory.includes(currentSelectedShip)) {
        userInventory.push(currentSelectedShip);

        const ship = shipData[currentSelectedShip];
        unlockShipCard(currentSelectedShip);
    }

    const cdText = document.getElementById("countdown-text");
    if (cdText) {
        cdText.innerText = "승리!";
        cdText.style.color = "#4CAF50";
        cdText.style.display = "block";
    }

    setTimeout(() => {
        if (cdText) cdText.style.display = "none";
        const gameContainer = document.getElementById("sailing-game-container");
        if (gameContainer) gameContainer.style.display = "none";

        const dialogBox = document.querySelector(".dialog-box");
        if (dialogBox) {
            dialogBox.style.display = "flex";
            dialogBox.style.zIndex = "9999";
        }

        if (typeof nextDialog === 'function') {
            nextDialog();
        }
    }, 1500);
}
function handleLose() {
    const cdText = document.getElementById("countdown-text");
    if (cdText) {
        cdText.innerText = "앗, 아쉽다!";
        cdText.style.color = "#F44336";
        cdText.style.display = "block";

        setTimeout(() => {
            cdText.style.display = "none";
            cdText.style.color = "#ffeb3b";

            if (confirm("아쉽게 놓쳤어! 한 번 더 도전해볼까?")) {
                if (typeof startSailingGame === 'function') {
                    startSailingGame();
                }
            } else {
                gameActive = false;
                const gameContainer = document.getElementById("sailing-game-container");
                if (gameContainer) gameContainer.style.display = "none";

                currentStep += 2;

                const dialogBox = document.querySelector(".dialog-box");
                if (dialogBox) {
                    dialogBox.style.display = "flex";
                    dialogBox.style.zIndex = "9999";
                }

                updateDialog();
            }
        }, 1500);
    }
}

function endGame() {
    gameActive = false;
    const gameContainer = document.getElementById("sailing-game-container");
    if (gameContainer) gameContainer.style.display = "none";

    const dialogBox = document.querySelector(".dialog-box");
    if (dialogBox) dialogBox.style.display = "none";

    const mainPage = document.getElementById("main-page");
    const mapPage = document.getElementById("map-page");

    if (mainPage) mainPage.style.display = "none";
    if (mapPage) {
        mapPage.style.display = "block";
    } else {
        location.reload();
    }
}

function unlockShipCard(shipType) {
    const shipSlot = document.getElementById("card-4f-2");
    if (!shipSlot) return;

    // 🌟 ship- 을 붙이지 않고 shipType(viking 등) 그대로 저장합니다.
    const info = cardData[shipType];
    if (!info) return;

    shipSlot.classList.add("found");
    shipSlot.innerHTML = `<img src="${info.img}" alt="${info.title}">${info.title}`;

    // 🌟 클릭했을 때 전달하는 값도 shipType 그대로!
    shipSlot.onclick = function () {
        showCardDetail(shipType);
    };
    cardData["my_selected_ship"] = shipType;
    saveGame();
    showToast(info.title);
}

function checkCeramicQuiz(answerNumber) {
    if (answerNumber === 3) {
        showAlert("타미: 정답!! 역시 탐험가야, 딱 보면 보이지?");

        const quizContainer = document.getElementById("ceramic-quiz-container");
        if (quizContainer) quizContainer.style.display = "none";

        const dialogBox = document.querySelector(".dialog-box");
        if (dialogBox) dialogBox.style.display = "block";

        currentStep++;
        updateDialog();
    } else {
        showAlert("타미 : 한번만 더 생각해봐!!");
    }
}
let diffsFound = 0;
let spot1Found = false;
let spot2Found = false;

function clickDiff(spotNum, element) {
    if (spotNum === 1 && !spot1Found) {
        spot1Found = true;
        element.classList.add('found');
        diffsFound++;
    } else if (spotNum === 2 && !spot2Found) {
        spot2Found = true;
        element.classList.add('found');
        diffsFound++;
    }

    document.getElementById('diff-count').innerText = `찾은 개수: ${diffsFound} / 2`;

    if (diffsFound === 2) {
        setTimeout(() => {
            showAlert("타미: 와! 두 군데를 모두 찾았어! 대단해!");

            document.getElementById('diff-game-container').style.display = 'none';
            document.querySelector('.dialog-box').style.display = 'block';

            diffsFound = 0;
            spot1Found = false;
            spot2Found = false;
            document.getElementById('spot1').classList.remove('found');
            document.getElementById('spot2').classList.remove('found');
            document.getElementById('diff-count').innerText = `찾은 개수: 0 / 2`;

            // 다음 대사로 넘어가기
            currentStep++;
            updateDialog();
        }, 800); // 0.8초 딜레이 (빨간 동그라미 쳐지는 거 볼 시간 주기)
    }
}
let canvas, ctx, gameLoop;

// 🚢 이미지 로드
const playerImg = new Image(); playerImg.src = "./images/4f_5panokdot.webp";
const bossImg1 = new Image(); bossImg1.src = "./images/4f_5kraken1.webp";
const bossImg2 = new Image(); bossImg2.src = "./images/4f_5kraken2.webp";
const expImg = new Image(); expImg.src = "./images/4f_5bumb.webp";
const backgroundImg = new Image(); backgroundImg.src = "./images/4f_5krakenback.webp";

// 🎮 게임 오브젝트 (초기값은 임시)
let player = { x: 135, y: 340, width: 50, height: 50, dx: 0, hp: 5 };
let boss = { x: 110, y: 30, width: 100, height: 100, dx: 1.5, hp: 5, frame: 0, attackRate: 0.015, bulletSpeed: 2 };
let playerSpeed = 6;

let playerBullets = [];
let bossBullets = [];
let explosions = [];
let isGameOver = false;
let currentDifficulty = 'easy'; // 현재 난이도 저장용

let bgY1 = 0;
let bgY2 = -400; // 캔버스 높이(400)만큼 위에서 시작
const bgSpeed = 2;

function startShootingGame() {
    // 1. 모달, 대화창, 그리고 🌟해버미 얼굴🌟까지 모두 숨기기
    const quizModal = document.getElementById("quiz-modal");
    if (quizModal) quizModal.style.display = "none";

    const dialogBox = document.querySelector(".dialog-box");
    if (dialogBox) dialogBox.style.display = "none";

    const haebeomi = document.getElementById("haebeomi-img");
    if (haebeomi) haebeomi.style.display = "none"; // 해버미 얼굴 퇴근!

    // 2. 슈팅 게임 컨테이너 켜기 (🌟 important 강제 적용!)
    const gameContainer = document.getElementById("shooting-game-container");
    if (gameContainer) {
        // 그냥 flex가 아니라 important를 붙여야 무조건 뜹니다!
        gameContainer.style.setProperty("display", "flex", "important");
    }

    // 3. 설명서 창 띄우기
    const tutorial = document.getElementById("shooting-tutorial");
    if (tutorial) {
        tutorial.style.setProperty("display", "flex", "important");
    }

    // 게임 루프가 돌고 있다면 일단 정지
    if (typeof gameLoop !== 'undefined' && gameLoop) cancelAnimationFrame(gameLoop);
}

// 2. 진짜 게임 시작 함수 (난이도 버튼 누를 때 실행)
function realStartShooting(difficulty) {
    // 🌟 설명서 숨기기
    document.getElementById("shooting-tutorial").style.display = "none";

    // 난이도 설정 적용
    currentDifficulty = difficulty || 'easy';

    if (currentDifficulty === 'easy') {
        player.hp = 5;
        boss.hp = 5;
        boss.dx = 1.5;
        boss.attackRate = 0.01;
        boss.bulletSpeed = 2;
    } else if (currentDifficulty === 'hard') {
        player.hp = 3;
        boss.hp = 10;
        boss.dx = 3.5;
        boss.attackRate = 0.05;
        boss.bulletSpeed = 4;
    }

    canvas = document.getElementById("shooting-canvas");
    ctx = canvas.getContext("2d");

    // 초기 위치 세팅
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 80; // 바닥 근처
    player.dx = 0;
    boss.x = canvas.width / 2 - boss.width / 2;

    playerBullets = [];
    bossBullets = [];
    explosions = [];
    isGameOver = false;

    // 게임 루프 시작
    updateGame();
}

function updateGame() {
    if (isGameOver) return;

    // 1. 배경 그리기 (움직이지 않고 캔버스 크기에 딱 맞춤)
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

    // 2. 플레이어 이동 및 그리기
    player.x += player.dx;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

    // 3. 보스 이동 및 애니메이션
    boss.x += boss.dx;
    if (boss.x < 0 || boss.x + boss.width > canvas.width) {
        boss.dx *= -1;
    }
    boss.frame++;
    let currentBossImg = (Math.floor(boss.frame / 20) % 2 === 0) ? bossImg1 : bossImg2;
    ctx.drawImage(currentBossImg, boss.x, boss.y, boss.width, boss.height);

    // 4. 보스 공격 패턴
    if (Math.random() < boss.attackRate) {
        bossBullets.push({
            x: boss.x + boss.width / 2 + (Math.random() * 40 - 20),
            y: boss.y + boss.height - 20,
            radius: 6, // 공격을 조금 더 키워서 잘 보이게 함
            speed: boss.bulletSpeed + Math.random() * 1.5
        });
    }

    // 5. 대포알(플레이어) 이동 및 충돌 검사
    ctx.fillStyle = "#FFFB00"; // 밝은 노란색 대포알
    for (let i = playerBullets.length - 1; i >= 0; i--) {
        let b = playerBullets[i];
        b.y -= b.speed;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2); ctx.fill();

        if (b.x > boss.x && b.x < boss.x + boss.width && b.y > boss.y && b.y < boss.y + boss.height) {
            explosions.push({ x: b.x - 20, y: b.y - 20, timer: 15 });
            boss.hp -= 1;
            playerBullets.splice(i, 1);
            continue;
        }
        if (b.y < 0) playerBullets.splice(i, 1);
    }

    // 6. 보스 공격(먹물) 이동 및 충돌 검사 🌟 색상 변경!
    ctx.fillStyle = "#FF3D00"; // 🔥 강렬한 형광 주황/빨강 (어두운 배경에서 가장 잘 보임)
    ctx.shadowBlur = 10;       // 빛나는 효과 추가
    ctx.shadowColor = "#FF3D00";

    for (let i = bossBullets.length - 1; i >= 0; i--) {
        let b = bossBullets[i];
        b.y += b.speed;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2); ctx.fill();

        if (b.x > player.x && b.x < player.x + player.width && b.y > player.y && b.y < player.y + player.height) {
            explosions.push({ x: player.x + player.width / 2 - 20, y: player.y + player.height / 2 - 20, timer: 15 });
            player.hp -= 1;
            bossBullets.splice(i, 1);
            continue;
        }
        if (b.y > canvas.height) bossBullets.splice(i, 1);
    }
    ctx.shadowBlur = 0; // 다른 그림에 영향 안 주게 그림자 리셋

    // 7. 폭발 이펙트 그리기
    for (let i = explosions.length - 1; i >= 0; i--) {
        let exp = explosions[i];
        ctx.drawImage(expImg, exp.x, exp.y, 40, 40);
        exp.timer--;
        if (exp.timer <= 0) explosions.splice(i, 1);
    }

    // 8. UI 표시 (텍스트 가독성 강화)
    ctx.font = "18px 'Jua'";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black"; // 검은색 테두리

    // 내 HP 표시
    ctx.strokeText("내 판옥선 HP: " + "❤️".repeat(player.hp), 10, canvas.height - 10);
    ctx.fillStyle = "white";
    ctx.fillText("내 판옥선 HP: " + "❤️".repeat(player.hp), 10, canvas.height - 10);

    // 크라켄 HP 표시
    ctx.strokeText("크라켄 HP: " + boss.hp, 10, 25);
    ctx.fillStyle = "#ff5252";
    ctx.fillText("크라켄 HP: " + boss.hp, 10, 25);

    // 9. 승리 / 패배 검사 로직 (동일)
    if (boss.hp <= 0) {
        isGameOver = true;
        setTimeout(() => {
            showAlert("크라켄을 물리쳤다! 우리가 바다를 지켜냈어!!");
            document.getElementById("shooting-game-container").style.display = "none";
            document.querySelector(".dialog-box").style.display = "block";
            currentStep++;
            updateDialog();
        }, 300);
        return;
    }

    if (player.hp <= 0) {
        isGameOver = true;
        setTimeout(() => {
            showAlert("앗, 크라켄의 먹물에 당했다! 다시 도전하자!");
            startShootingGame(currentDifficulty);
        }, 300);
        return;
    }

    gameLoop = requestAnimationFrame(updateGame);
}
function moveShootingPlayer(dir) {
    player.dx = dir * playerSpeed;
}

// 🌟 이 함수가 없어서 에러가 났던 거예요! 추가해 주세요.
function stopPlayer() {
    player.dx = 0;
}
function shootBullet() {
    if (isGameOver) return;
    if (playerBullets.length < 15) {
        playerBullets.push({
            x: player.x + player.width / 2,
            y: player.y,
            radius: 5,
            speed: 8
        });
    }
}

function exitShootingGame() {
    // 1. 슈팅 게임창 숨기기
    const shootingContainer = document.getElementById("shooting-game-container");
    if (shootingContainer) shootingContainer.style.setProperty("display", "none", "important");

    // 2. 대화창 다시 띄우기
    const dialogBox = document.querySelector(".dialog-box");
    if (dialogBox) dialogBox.style.display = "block";

    // 🌟 3. 해버미 얼굴(친구들) 다시 불러오기!
    const haebeomi = document.getElementById("haebeomi-img");
    if (haebeomi) haebeomi.style.display = "block";

    // 게임 애니메이션 정지
    if (gameLoop) cancelAnimationFrame(gameLoop);
}

function finishShootingGame(isWin) {
    if (isWin) {
        showAlert("대단해! 크라켄을 물리치고 우리 바다를 지켰어! ⚓");
    } else {
        showAlert("앗, 함선이 너무 많이 부서졌어... 정비하고 다시 도전하자!");
    }

    // 1. 슈팅 게임창 닫기
    document.getElementById("shooting-game-container").style.setProperty("display", "none", "important");

    // 2. 대화창과 해버미 얼굴 복구 (🌟 여기가 핵심!)
    document.querySelector(".dialog-box").style.display = "block";
    const haebeomi = document.getElementById("haebeomi-img");
    if (haebeomi) haebeomi.style.display = "block";

    // 3. 만약 이겼다면 다음 대사로 넘기기
    if (isWin) {
        currentStep++;
        updateDialog();
    }
}
function closeQuizAndNext() {
    document.getElementById("quiz-modal").style.display = "none";
    document.querySelector(".dialog-box").style.display = "block";

    // 🌟 다음 버튼을 완벽하게 메인 스토리용으로 리셋
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.onclick = nextDialog;
        nextBtn.innerHTML = "다음 ▶"; // (사용하시는 기본 다음 버튼 텍스트)
    }

    // 메인 대본의 다음 줄로 넘어가기 (여기서 "그렇군요! 그럼 남은 전시도..." 대사가 나옵니다)
    currentStep++;
    updateDialog();
}

function updateCompanionCard() {
    if (cardData && cardData["haebeomi"]) {
        cardData["haebeomi"].title = "해버미와 타미";
        cardData["haebeomi"].img = imgfriend;
        cardData["haebeomi"].desc = "똑똑한 타미와 듬직한 해버미! 둘이 함께라면 우리는 박물관 최강!";
    }
    const haebeomiCard = document.querySelector(".card[onclick*='haebeomi']");
    if (haebeomiCard) {
        const thumbImg = haebeomiCard.querySelector("img");
        if (thumbImg) {
            thumbImg.src = imgfriend;
        }

        const textNode = Array.from(haebeomiCard.childNodes).find(node => node.nodeType === Node.TEXT_NODE || node.nodeName === "BR");

        haebeomiCard.innerHTML = `<img src="${imgfriend}" alt="해버미와 타미">해버미와<br>타미`;
    }
    saveGame();
    showAlert("🎉 도감 업데이트! 해버미와 타미가 친구가 되었습니다.");
}
let isSubStoryActive = false; // 🌟 방어막 깃발 (현재 서브스토리 중인가?)

// 🌟 괄호 안에 isReturn = false 추가!
function askArtifactChoice(isReturn = false) {
    const quizImageContainer = document.getElementById("quiz-image-container");
    if (quizImageContainer) quizImageContainer.style.display = "none";

    document.getElementById("speaker-name").innerText = "해버미";

    // 🌟 처음인지, 퀴즈를 맞추고 돌아온 건지에 따라 대사가 바뀝니다!
    if (isReturn === true) {
        document.getElementById("dialog-text").innerText = "정말 대단하세요! 다시 궁금한 유물은 없으세요?";
    } else {
        document.getElementById("dialog-text").innerText = "전시장에 있는 유물 중 혹시 더 궁금한 점이 있으실까요?";
    }

    document.getElementById("quiz-title").innerText = "궁금한 유물을 선택하세요!";
    document.getElementById("quiz-buttons").innerHTML = `
        <button class="choice-btn" onclick="startSubStory('najeon')">1. 나전 대모 쌍룡문 함</button>
        <button class="choice-btn" onclick="startSubStory('baekja')">2. 백자 철화 운룡문 호</button>
        <button class="choice-btn" onclick="closeQuizAndNext()">3. 아니 없어!</button>
    `;
    document.getElementById("quiz-modal").style.display = "flex";
}

function startSubStory(storyName) {
    document.getElementById("quiz-modal").style.display = "none";
    isSubStoryActive = true;
    currentSubStory = storyName;
    subStoryIndex = 0;

    // 🌟 '다음' 버튼 부활시키고 원래 이름 되찾아주기!
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.style.display = "inline-block";
        nextBtn.innerHTML = "다음 ▶"; // 원래 쓰시던 다음 버튼 텍스트로 넣어주세요!
    }

    playSubStory();
}
function playSubStory() {
    let script = currentSubStory === "najeon" ? script_najeon : script_baekja;
    let line = script[subStoryIndex];

    document.getElementById("speaker-name").innerText = line.speaker;
    document.getElementById("dialog-text").innerText = line.text;

    const dialogBox = document.querySelector(".dialog-box");
    if (dialogBox) dialogBox.style.display = "block";

    const targetImg = document.getElementById("haebeomi-img");
    if (targetImg && line.img) {
        targetImg.style.display = "block";
        targetImg.src = line.img;
        targetImg.style.width = line.imgWidth || line.imgwidth || "80%";
        targetImg.style.bottom = line.imgBottom || "0px";
    }

    // 🌟 퀴즈 여부에 따라 '다음' 버튼의 역할 바꾸기!
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.style.display = "inline-block";

        if (line.quiz) {
            // 퀴즈가 있는 줄이면: 버튼 이름을 바꾸고, 누르면 퀴즈창이 뜨게 설정
            nextBtn.innerHTML = "퀴즈 풀기 🔍";
            nextBtn.onclick = function () {
                showSubStoryQuiz(line.quiz);
            };
            const prevBtn = document.getElementById("prev-btn");
            if (prevBtn) {
                prevBtn.style.display = "inline-block";
                prevBtn.onclick = prevDialog;
            }
        } else {
            // 일반 대사면: 원래대로 다음 대사로 넘어가게 설정
            nextBtn.innerHTML = "다음 ▶";
            nextBtn.onclick = nextDialog;
        }
    }
}

function showSubStoryQuiz(quizType) {
    if (quizType === "najeon_toe") {
        document.getElementById("quiz-title").innerText = "용은 한 발에 발가락 몇 개를 가지고 있을까요?";
        document.getElementById("quiz-buttons").innerHTML = `
            <button class="choice-btn" onclick="showAlert('틀렸습니다! 유물을 다시 한 번 살펴보세요!')">1번: 3개</button>
            <button class="choice-btn" onclick="finishSubStoryQuiz('정답입니다! 모르긴몰라 궁궐이나 지체 높은 대감님들이 쓰시던 유물일거에요')">2번: 4개</button>
            <button class="choice-btn" onclick="showAlert('틀렸습니다! 유물을 다시 한 번 살펴보세요!')">3번: 5개</button>
        `;
    } else if (quizType === "baekja_ox") {
        document.getElementById("quiz-title").innerText = "진짜 항아리와 똑같은 그림을 찾아보세요!";

        // 🌟 버튼을 나란히 배치하고, 안에 이미지를 넣습니다!
        // transform: scaleX(-1) 이 들어간 쪽이 좌우가 뒤집힌 가짜입니다!
        document.getElementById("quiz-buttons").innerHTML = `
            <div style="display: flex; justify-content: space-around; gap: 10px; margin-top: 10px;">
                
                <button class="choice-btn" style="padding:10px; flex: 1;" onclick="showAlert('아이고! 항아리를 다시 한 번만 살펴봐주세요!')">
                    <img src="${img3f_3ho}" style="width:100%; transform: scaleX(-1); border-radius:10px; margin-bottom:10px;">
                    <br>1번
                </button>
                
                <button class="choice-btn" style="padding:10px; flex: 1;" onclick="finishSubStoryQuiz('정답입니다! 전시장에 있는 모습과 똑같죠?')">
                    <img src="${img3f_3ho}" style="width:100%; border-radius:10px; margin-bottom:10px;">
                    <br>2번
                </button>

            </div>
        `;
    }
    document.getElementById("quiz-modal").style.display = "flex";
}

function finishSubStoryQuiz(successMessage) {
    document.getElementById("quiz-modal").style.display = "none";

    document.getElementById("speaker-name").innerText = "해버미";
    document.getElementById("dialog-text").innerText = successMessage;

    currentSubStory = "finished";

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.innerHTML = "다음 ▶";
        nextBtn.onclick = nextDialog;
    }

    // 🌟 정답 맞춘 직후에는 이전 버튼을 살짝 숨깁니다.
    const prevBtn = document.getElementById("prev-btn");
    if (prevBtn) prevBtn.style.display = "none";
}

function showAlert(message) {
    document.getElementById('alert-message').innerText = message;
    document.getElementById('custom-alert').style.display = 'flex';
}

// 창을 닫는 함수
function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}
// ==========================================
// 🌊 바닷속 전복 캐기 미니게임 (슈팅 게임과 충돌 완벽 해결!) 🌊
// ==========================================

// 🌟 1. 게임용 특수 효과(애니메이션) CSS 추가


// 🌟 2. 전복 게임 전용 변수
let divingScore = 0;
let divingTime = 15;
let divingTimerInterval;
let divingSpawnInterval;
let divingDifficulty = 'easy';
let targetAbaloneCount = 5;

// 🌟 3. 다이빙 게임 처음 진입 함수 (대화창에서 넘어올 때)
function openDivingGame() {
    // 대화창과 해버미 얼굴 확실히 퇴근!
    const dialogBox = document.querySelector(".dialog-box");
    if (dialogBox) dialogBox.style.display = "none";

    const haebeomi = document.getElementById("haebeomi-img");
    if (haebeomi) haebeomi.style.display = "none";

    // 🌟 다이빙 게임 전체 화면과 튜토리얼을 강력하게(!important) 띄우기
    const divingContainer = document.getElementById("diving-game-container");
    if (divingContainer) divingContainer.style.setProperty("display", "block", "important");

    const tutorial = document.getElementById("diving-tutorial");
    if (tutorial) tutorial.style.setProperty("display", "flex", "important");
}

// 🌟 4. 진짜 게임 시작 (난이도 버튼을 눌렀을 때)
function startDivingGame(difficulty) {
    divingDifficulty = difficulty;

    // 🌟 튜토리얼 창 강력하게(!important) 숨기기! (안 넘어가던 문제 해결)
    document.getElementById('diving-tutorial').style.setProperty("display", "none", "important");

    divingScore = 0;

    // 난이도별 설정 적용
    if (divingDifficulty === 'hard') {
        divingTime = 10;
        targetAbaloneCount = 7;
        document.getElementById('diving-score').parentNode.innerHTML = `🦪 전복: <span id="diving-score">0</span> / 7`;
    } else {
        divingTime = 15;
        targetAbaloneCount = 5;
        document.getElementById('diving-score').parentNode.innerHTML = `🦪 전복: <span id="diving-score">0</span> / 5`;
    }

    document.getElementById('diving-score').innerText = divingScore;
    document.getElementById('diving-timer').innerText = divingTime;
    document.getElementById('diving-play-area').innerHTML = "";

    divingTimerInterval = setInterval(() => {
        divingTime--;
        document.getElementById('diving-timer').innerText = divingTime;
        if (divingTime <= 0) {
            endDivingGame(false);
        }
    }, 1000);

    let spawnRate = (divingDifficulty === 'hard') ? 500 : 700;
    divingSpawnInterval = setInterval(spawnSeaItem, spawnRate);
}

// 🌟 5. 해산물 뿅! 나타나는 함수
function spawnSeaItem() {
    const playArea = document.getElementById('diving-play-area');
    const item = document.createElement('img');

    const rand = Math.random();
    let type = "";
    if (rand < 0.5) {
        item.src = img3f_5abalone;
        type = "abalone";
    } else if (rand < 0.8) {
        item.src = img3f_5urchin;
        type = "urchin";
    } else {
        item.src = img3f_5starfish; // 세미콜론 빠진 것도 고쳤습니다!
        type = "starfish";
    }

    item.style.position = 'absolute';
    item.style.width = '85px';
    item.style.height = '85px';
    item.style.objectFit = 'contain';
    item.style.cursor = 'pointer';
    item.style.animation = 'popIn 0.3s ease-out';

    const maxX = playArea.clientWidth - 85;
    const maxY = playArea.clientHeight - 85;
    item.style.left = Math.floor(Math.random() * maxX) + 'px';
    item.style.top = Math.floor(Math.random() * maxY) + 'px';

    // 컴퓨터 마우스 클릭 이벤트
    item.onclick = function () { catchSeaItem(type, item); };

    // 🌟 핸드폰 터치 이벤트 (함수 이름 오타 해결!)
    item.ontouchstart = function (e) {
        e.preventDefault();
        catchSeaItem(type, item); // catchItem -> catchSeaItem 으로 수정 완료
    };

    playArea.appendChild(item);

    let minDisappear = (divingDifficulty === 'hard') ? 600 : 1000;
    let randomAdd = (divingDifficulty === 'hard') ? 400 : 800;

    setTimeout(() => {
        if (item.parentNode) item.parentNode.removeChild(item);
    }, Math.floor(Math.random() * randomAdd) + minDisappear);
}

// 🌟 6. 해산물을 눌렀을 때 처리 (타격감!)
function catchSeaItem(type, element) {
    const x = element.style.left;
    const y = element.style.top;
    if (element.parentNode) element.parentNode.removeChild(element);

    const effectText = document.createElement('div');
    effectText.className = 'floating-text';
    effectText.style.left = x;
    effectText.style.top = y;

    if (type === "abalone") {
        divingScore++;
        document.getElementById('diving-score').innerText = divingScore;

        effectText.innerText = "득템! +1";
        effectText.style.color = "#aed581";
        document.getElementById('diving-play-area').appendChild(effectText);

        if (divingScore >= targetAbaloneCount) {
            setTimeout(() => endDivingGame(true), 300);
        }
    } else {
        let penalty = (divingDifficulty === 'hard') ? 2 : 1;
        effectText.innerText = `앗! -${penalty}초`;
        effectText.style.color = "#ff5252";
        document.getElementById('diving-play-area').appendChild(effectText);

        divingTime -= penalty;
        document.getElementById('diving-timer').innerText = divingTime;

        const gameContainer = document.getElementById('diving-game-container');
        gameContainer.classList.add('shake-effect');
        setTimeout(() => gameContainer.classList.remove('shake-effect'), 300);
    }

    setTimeout(() => {
        if (effectText.parentNode) effectText.parentNode.removeChild(effectText);
    }, 600);
}

// 🌟 7. 게임 종료 함수 (포기했을 때 해버미 살리기 포함!)
function endDivingGame(isWin, isGiveUp = false) {
    clearInterval(divingTimerInterval);
    clearInterval(divingSpawnInterval);

    const targetImg = document.getElementById("haebeomi-img");

    // 🌟 포기하기를 눌렀을 때
    if (isGiveUp) {
        document.getElementById('diving-game-container').style.display = 'none';
        document.querySelector('.dialog-box').style.display = 'block';
        if (targetImg) targetImg.style.display = 'block'; // 해버미 출근!
        showAlert("조금 더 연습해서 다시 도전해보자!");
        return; // 여기서 함수 완전 종료
    }

    // 🌟 승리했을 때
    if (isWin) {
        showAlert(`와~ 전복 ${targetAbaloneCount}마리를 무사히 다 캤어! 대단해!`);
        document.getElementById('diving-game-container').style.display = 'none';
        document.querySelector('.dialog-box').style.display = 'block';
        if (targetImg) targetImg.style.display = 'block'; // 해버미 출근!

        unlockCard("card-3f-2", "해녀복", imgbook_haenyeocloth, "국립해양박물관 명예 해녀임을 인정하는 해녀복");

        currentStep++;
        updateDialog();
    } else {
        // 🌟 시간 초과로 졌을 때
        showAlert("앗! 시간이 다 지났어. 숨을 고르고 다시 한번 잠수해보자!");
        // 설명서 창 다시 강력하게 띄워주기
        const tutorial = document.getElementById('diving-tutorial');
        if (tutorial) tutorial.style.setProperty("display", "flex", "important");
    }
}

function showToast(title) {
    const toast = document.getElementById("toast-noti");
    document.getElementById("toast-text").innerText = title;

    toast.style.display = "block";

    // 부드럽게 나타나기
    setTimeout(() => { toast.style.opacity = "1"; }, 10);

    // 2초 뒤에 부드럽게 사라지기
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => { toast.style.display = "none"; }, 500);
    }, 2000);
}

function showFloorClear() {
    // 1. 필요한 요소들 가져오기 (맨 위에서 99층 부르던 건 지웠습니다!)
    localStorage.setItem(`clear_floor${currentFloor}`, "true");

    const dialogBox = document.querySelector(".dialog-box");
    const clearScreen = document.getElementById("floor-clear-screen");
    const stamp = document.getElementById("stamp-effect");
    const title = document.getElementById("clear-floor-title");

    if (!clearScreen || !stamp || !title) return;

    // 2. [지능형] 현재 층수에 맞춰 제목 자동 설정
    let floorName = "";
    if (currentFloor === 2) floorName = "2F 야외전시장 ";
    else if (currentFloor === 3) floorName = "3F 상설전시실<br>해양관";
    else if (currentFloor === 4) floorName = "3F 수족관";
    else if (currentFloor === 5) floorName = "4F 상설전시실<br>항해관";

    title.innerHTML = floorName + "<br>탐험 완료";
    // 3. 현재 화면 정리 (어떤 층의 화면이든 싹 숨기기)
    if (dialogBox) dialogBox.style.display = "none";
    document.getElementById("main-page").style.display = "none";
    // 혹시 층별로 별도 ID(floor3-page 등)를 쓰신다면 여기서 숨겨줍니다.
    const currentFloorPage = document.getElementById(`floor${currentFloor}-page`) || document.getElementById("floorAqua-page");
    if (currentFloorPage) currentFloorPage.style.display = "none";
    const sailingGame = document.getElementById("sailing-game-container");
    if (sailingGame) sailingGame.style.display = "none";

    // 4. 애니메이션 초기화 (도장을 크고 투명하게)
    title.style.opacity = "0";
    title.style.transform = "translateY(20px)";
    stamp.style.transition = "none";
    stamp.style.opacity = "0";
    stamp.style.transform = "scale(4) rotate(-15deg)";

    clearScreen.style.display = "flex";
    void stamp.offsetWidth; // 렉 방지용 강제 리플로우

    // 5. [순차 연출] 글자 먼저 -> 도장 쾅!
    // 0.1초 뒤 글자 등장
    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 100);

    // 0.6초 뒤 도장 쾅! (이펙트 없이 묵직하게)
    setTimeout(() => {
        stamp.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease-out";
        stamp.style.opacity = "1";
        stamp.style.transform = "scale(1) rotate(-10deg)";
    }, 600);

    // 6. 화면 터치 시 복귀 (endFloorExploration의 기능을 여기 합쳤습니다!)
    clearScreen.onclick = function () {
        clearScreen.style.display = "none";

        // 🌟 도장 화면을 닫을 때, 4개 층 다 깼는지 여기서 확인합니다!
        const is2F = localStorage.getItem("clear_floor2") === "true";
        const is3F = localStorage.getItem("clear_floor3") === "true";
        const is4F = localStorage.getItem("clear_floor4") === "true";
        const is5F = localStorage.getItem("clear_floor5") === "true";

        if (is2F && is3F && is4F && is5F) {
            // 다 깼으면 맵으로 안 가고 에필로그 자동 시작!
            startMission(99);
        } else {
            // 덜 깼으면 맵으로 돌아가서 도장 표시 (기존 나으리 로직)
            const mapPage = document.getElementById("map-page");
            if (mapPage) mapPage.style.display = "block";



            let btn = document.querySelector(`button[onclick='startMission(${currentFloor})']`);
            if (btn) {
                let displayName = "";
                if (currentFloor === 2) displayName = "2F 어린이박물관&야외전시장";
                else if (currentFloor === 3) displayName = "3F 상설전시실 해양관";
                else if (currentFloor === 4) displayName = "3F 수족관";
                else if (currentFloor === 5) displayName = "4F 상설전시실 항해관";

                // 🌟 기존 방식처럼 글자를 자르지 않고, displayName을 그대로 사용합니다!
                btn.innerHTML = `${displayName} <img src="${typeof imgStamp !== 'undefined' ? imgStamp : ''}" style="height:25px; vertical-align:middle; margin-left:5px;">`;

                btn.style.backgroundColor = "#e0e0e0";
                btn.onclick = function () { showAlert("이미 도감을 모두 찾은 층이야!"); };
            }
        }

        if (currentFloor === 5 && typeof updateCompanionCard === "function") {
            updateCompanionCard();
        }
    };
}

function showCardDetail(titleOrId) {
    console.log("카드 클릭됨:", titleOrId);

    const detailModal = document.getElementById("card-detail-modal");
    if (!detailModal) return;

    // 🌟 1. 박물관 카드 처리 (고정)
    if (titleOrId === 'museum') {
        document.getElementById("detail-title").innerText = "국립해양박물관";
        document.getElementById("detail-img").src = "./images/book_museum.webp";
        document.getElementById("detail-desc").innerText = "우리나라 최초의 종합해양박물관, 해양의 역사와 문화를 한 곳에서 볼 수 있다.";

        if (document.getElementById("quiz-modal")) document.getElementById("quiz-modal").style.display = "none";
        // 🚨 범인 검거! 대화창을 끄는 코드를 삭제(주석 처리)했습니다.
        // if (document.querySelector(".dialog-box")) document.querySelector(".dialog-box").style.display = "none";

        detailModal.style.display = "flex";
        return;
    }

    // 🌟 2. 해버미 카드 처리 (업데이트 반영 마법 적용!)
    if (titleOrId === 'haebeomi') {
        let mTitle = "해버미";
        let mImg = ".images/book_baebumi.webp";
        let mDesc = "바다를 사랑하는 용감한 탐험가 해버미야! 함께 도감을 완성해보자!";

        if (typeof cardData !== 'undefined' && cardData["haebeomi"]) {
            if (cardData["haebeomi"].title) mTitle = cardData["haebeomi"].title;
            if (cardData["haebeomi"].img) mImg = cardData["haebeomi"].img;
            if (cardData["haebeomi"].desc) mDesc = cardData["haebeomi"].desc;
        }

        document.getElementById("detail-title").innerText = mTitle;
        document.getElementById("detail-img").src = mImg;
        document.getElementById("detail-desc").innerText = mDesc;

        if (document.getElementById("quiz-modal")) document.getElementById("quiz-modal").style.display = "none";
        // 🚨 범인 검거! 대화창을 끄는 코드를 삭제(주석 처리)했습니다.
        // if (document.querySelector(".dialog-box")) document.querySelector(".dialog-box").style.display = "none";

        detailModal.style.display = "flex";
        return;
    }
    if (currentFloor === 99) {
        const detailModal = document.getElementById("card-detail-modal");

        // 1. 도감 데이터(cardData)에서 클릭한 카드의 정보를 찾습니다.
        const info = cardData[titleOrId];

        if (info && detailModal) {
            // 2. 상세창의 제목, 이미지, 설명을 갈아끼웁니다.
            document.getElementById("detail-title").innerText = info.title;
            document.getElementById("detail-img").src = info.img;
            document.getElementById("detail-desc").innerText = info.desc;

            // 3. 도감판(10,000,000)보다 상세창을 무조건 위로(20,000,000) 올립니다!
            detailModal.style.display = "flex";
            detailModal.style.zIndex = "20000000";
        } else {
            // 혹시 데이터 이름이 달라서 못 찾으면 콘솔창(F12)에 범인을 띄워줍니다.
            console.log("데이터를 못 찾았습니다! 이름 확인 필요:", titleOrId);
        }

        return; // 🛑 [가장 중요] 에필로그일 때는 여기서 멈춰야 대화가 고장나지 않습니다!
    }

    // 🌟 3. 그 외 일반 유물 카드들 처리
    let title = titleOrId;
    let img = "";
    let description = "상세 설명이 등록되지 않았습니다.";

    if (typeof cardData !== 'undefined' && cardData[titleOrId]) {
        title = cardData[titleOrId].title;
        img = cardData[titleOrId].img;
        description = cardData[titleOrId].desc || description;
    }

    document.getElementById("detail-img").src = img;
    document.getElementById("detail-title").innerText = title;
    document.getElementById("detail-desc").innerText = description;

    detailModal.style.display = "flex";
}

function closeCardDetail() {
    document.getElementById("card-detail-modal").style.display = "none";
}

// ==========================================
function applyTutorial(step) {
    if (currentFloor !== 1 && currentFloor !== 0 && typeof currentFloor !== 'undefined') {
        return;
    }
    // 1. 모든 하이라이트 효과 초기화
    document.querySelectorAll('.tutorial-focus').forEach(el => {
        el.classList.remove('tutorial-focus');
        el.classList.remove('allow-click');
        if (el.classList.contains('progress-header')) {
            el.style.zIndex = "";
            el.style.position = "";
        }
    });
    const loginPage = document.getElementById("login-page");
    const mapPage = document.getElementById("map-page");
    const bookModal = document.getElementById("encyclopedia-modal");
    const detailModal = document.getElementById("card-detail-modal");

    // [Step 4] 지도로 전환 + 층 버튼 강조
    if (step === 4) {
        const login = document.getElementById("login-page");
        const map = document.getElementById("map-page");
        const haebeomi = document.getElementById("haebeomi-img");

        if (login) {
            login.style.display = "none";
            login.style.opacity = "0";
        }

        if (map) {
            map.style.display = "block";
            map.style.opacity = "1";
            map.style.position = "fixed"; // 🌟 뼈대 복구! (맵 안 사라짐)
            map.style.top = "0";
            map.style.left = "0";
            // 🚨 [핵심] 999에서 5로 낮춥니다. (상단바가 z-index 9이기 때문)
            map.style.zIndex = "5";
        }

        if (haebeomi) haebeomi.style.opacity = "0";

        // 층 버튼 번쩍이게 하고, "터치"는 핀셋으로 마비시킴!
        const floorBox = document.querySelector(".floor-container");
        if (floorBox) {
            floorBox.classList.add("tutorial-focus");
            floorBox.style.pointerEvents = "none";
        }

        // 혹시 모를 도감 버튼 조기 클릭도 마비!
        const encyBtn = document.querySelector(".encyclopedia-btn");
        if (encyBtn) encyBtn.style.pointerEvents = "none";
    }

    // 🌟 [목표 2] 새로 추가된 Step 5: 진행도 상단바 안내
    else if (step === 5) {
        const progressHeader = document.querySelector(".progress-header");
        if (progressHeader) {
            progressHeader.style.display = "flex";
            progressHeader.classList.add("tutorial-focus");

            // 🚨 [핵심 수정] CSS의 relative를 강제로 이기고 무조건 맨 위(fixed)에 붙잡아둠!
            progressHeader.style.setProperty("position", "fixed", "important");
            progressHeader.style.setProperty("z-index", "10005", "important");
        }
    }

    // [Step 6] (기존 5) 도감 버튼 강조
    else if (step === 6) {
        const encyBtn = document.querySelector(".encyclopedia-btn");
        if (encyBtn) {
            encyBtn.classList.add("tutorial-focus");
            // 대화창으로 넘어가야 하니 유저가 못 누르게 차단 유지
            encyBtn.style.pointerEvents = "none";
        }
    }

    // [Step 7] (기존 6) 도감 모달 열기 + 도감함 강조
    else if (step === 7) {
        if (bookModal) bookModal.style.display = "flex";
        document.querySelector(".book-container").classList.add("tutorial-focus");
    }

    // [Step 8] (기존 7) 카드 클릭 유도
    else if (step === 8) {
        const nextBtn = document.getElementById("next-btn");
        if (nextBtn) nextBtn.style.display = "none";

        const targetCard = document.querySelector(".card.found");
        if (targetCard) {
            targetCard.classList.add("tutorial-focus");
            targetCard.classList.add("allow-click");
            targetCard.style.pointerEvents = "auto"; // 🌟 여기서만 카드 터치 허용!

            targetCard.onclick = function (event) {
                event.stopPropagation();
                showCardDetail('museum');
                nextDialog();
            };
        }
    }

    // [Step 9] (기존 8) 상세 설명 모달 강조
    else if (step === 9) {
        const bookModal = document.getElementById("encyclopedia-modal");
        const detailModal = document.getElementById("card-detail-modal");
        const nextBtn = document.getElementById("next-btn");

        if (bookModal) bookModal.style.display = "flex";
        if (detailModal) detailModal.style.display = "flex";

        const detailTitle = document.getElementById("detail-title");
        const detailImg = document.getElementById("detail-img");
        const detailDesc = document.getElementById("detail-desc");

        if (detailTitle) detailTitle.innerText = "국립해양박물관";
        if (detailImg) detailImg.src = "./images/book_museum.webp";
        if (detailDesc) detailDesc.innerText = "우리나라 최초의 종합해양박물관, 해양의 역사와 문화를 한 곳에서 볼 수 있다.";

        const bookContainer = document.querySelector(".book-container");
        if (bookContainer) bookContainer.classList.remove("tutorial-focus");

        const detailContainer = document.querySelector(".card-detail-container");
        if (detailContainer) detailContainer.classList.add("tutorial-focus");

        if (nextBtn) nextBtn.style.display = "block";
    }

    // [Step 10] (기존 9) 탐험하러 출발해볼까?
    else if (step === 10) {
        if (bookModal) bookModal.style.display = "none";
        if (detailModal) detailModal.style.display = "none";
        if (mapPage) mapPage.style.display = "block";
    }
}

function finishTutorial() {
    const dialogBox = document.querySelector(".dialog-box");
    const mapPage = document.getElementById("map-page");

    if (dialogBox) dialogBox.style.display = "none";
    if (mapPage) {
        mapPage.classList.remove("tutorial-active");
        mapPage.style.pointerEvents = "auto";
    }

    // 🌟 1. 모든 튜토리얼 족쇄 해제
    document.querySelectorAll('.block-click, .tutorial-active, .tutorial-focus, .allow-click').forEach(el => {
        el.classList.remove('block-click', 'tutorial-active', 'tutorial-focus', 'allow-click');
        el.style.pointerEvents = "auto";
    });

    // 🚨 [새로 추가] 마비시켰던 층 버튼과 도감 버튼 심폐소생!
    const floorBox = document.querySelector(".floor-container");
    if (floorBox) floorBox.style.pointerEvents = "auto";
    const encyBtn = document.querySelector(".encyclopedia-btn");
    if (encyBtn) encyBtn.style.pointerEvents = "auto";

    // 🌟 2. 박물관 카드 '본래 기능'으로 기억 복구!
    const museumCard = document.querySelector(".card.found");
    if (museumCard) {
        museumCard.style.pointerEvents = "auto";
        museumCard.onclick = function (event) {
            event.stopPropagation();
            showCardDetail('museum');
        };
    }

    currentFloor = 1;
    console.log("⚓ 출항 준비 완료! 서약서를 띄웁니다.");

    // 서약서 띄우기
    const etiquetteModal = document.getElementById("etiquette-modal");
    if (etiquetteModal) {
        etiquetteModal.style.display = "flex";
    }
}

function showFinalCertificate() {
    // 1. 이름, 날짜 넣기
    const name = localStorage.getItem("explorerName") || "꼬마 항해사";
    const nameSpan = document.getElementById("cert-user-name");
    if (nameSpan) nameSpan.innerText = `${name} `;
    localStorage.setItem("adventureFinished", "true");
    const today = new Date();
    const dateDiv = document.getElementById("cert-date");
    if (dateDiv) dateDiv.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    // 🌟 [아이디어 1 적용] 시리얼 번호 자동 생성 (예: 2026-0407-1234)
    const serialDiv = document.getElementById("cert-serial");
    if (serialDiv) {
        // 오늘 날짜와 랜덤 4자리 숫자를 조합합니다.
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const random = Math.floor(1000 + Math.random() * 9000); // 1000~9999
        serialDiv.innerText = `No. ${today.getFullYear()}-${month}${day}-${random}`;
    }

    // 2. 임명장 짠!
    const certModal = document.getElementById("epilogue-certificate");
    if (certModal) certModal.style.display = "flex";

    // 🌟 [아이디어 2 적용] 0.8초 뒤에 전통 직장 도장 쾅!
    setTimeout(() => {
        const seal = document.getElementById("cert-seal");
        if (seal) {
            seal.style.opacity = "1";
            // 🌟 scale(1)로 줄어들며 찍히고, 살짝 회전(-12도)시켜 수제 도장 느낌을 줍니다.
            seal.style.transform = "scale(1) rotate(-12deg)";

            // 🌟 도장 찍히는 소리 효과를 넣고 싶으시면 여기에 추가!
            // if(soundStamp) soundStamp.play();
        }
    }, 800);
}
function saveCertificate() {
    // 1. 보안 환경 감지 (아이폰/아이패드 또는 시크릿 모드 의심 상황)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // 시크릿 모드는 완벽 감지가 어렵지만, 속도가 느려지거나 저장소가 막히는 특징이 있음
    // 여기서는 아이폰이거나, 저장 버튼을 누르는 흐름에서 바로 안내를 주도록 합니다.

    if (isIOS) {
        alert("🛡️ 아이폰(iOS) 보안 정책상 자동 저장이 제한됩니다.\n\n이 화면을 직접 [스크린샷]으로 찍어서 저장해 주세요!");
        return; // 👈 시도도 안 하고 여기서 끝냅니다.
    }

    // 2. PC나 안드로이드도 혹시 모를 에러를 대비해 캡처 시도
    const certPaper = document.getElementById("cert-paper");
    const buttons = document.querySelectorAll("#epilogue-certificate button");
    buttons.forEach(b => b.style.visibility = "hidden");

    html2canvas(certPaper, {
        useCORS: true,
        scale: 2,
        backgroundColor: "#fffdf0",
        logging: false
    }).then(canvas => {
        buttons.forEach(b => b.style.visibility = "visible");

        try {
            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "해박탐험단_인증서.png";
            link.click();
        } catch (e) {
            // 실패하면 바로 안내
            alert("보안 환경으로 인해 자동 저장이 어렵습니다.\n직접 화면을 [스크린샷] 찍어주세요!");
        }
    }).catch(err => {
        buttons.forEach(b => b.style.visibility = "visible");
        alert("화면을 직접 [스크린샷] 찍어서 저장해 주세요!");
    });
}

function showShipHint() {
    const currentShipId = currentSelectedShip;

    // 디버깅: F12를 눌렀을 때 제대로 이름이 들어왔는지 확인!
    console.log("힌트를 줄 배 이름:", currentShipId);

    // 배를 안 골랐을 때 방어
    if (!currentShipId) {
        alert("타미: 어떤 배를 찾고 있는지 먼저 알려줘!");
        return;
    }

    const hintBubble = document.getElementById("hint-bubble");
    let hintText = "";

    // 🌟 2. 선택한 배에 맞춰 힌트 세팅!
    if (currentShipId === "victoria") {
        hintText = "타미: 돛에 붉은 십자가가 그려져 있어! 배가 모여있는 곳들을 잘 살펴봐!";
    } else if (currentShipId === "viking") {
        hintText = "타미: 동그란 방패들이 옆에 달려있지! 전시장에서 가장 큰 배야.";
    } else if (currentShipId === "cuttysark") {
        hintText = "타미: 돛이 가장 많은 배지, 배들이 모여 있는 가장 바깥 쪽을 잘 살펴봐";
    } else {
        hintText = "타미: 주변을 꼼꼼히 다시 한번 살펴보자!";
    }

    // 🌟 3. 힌트 말풍선 띄우기
    if (hintBubble) {
        hintBubble.innerText = hintText;
        hintBubble.style.display = "block";
    }
}
function acceptEtiquette() {
    // 1. 공고문 숨기기
    document.getElementById("etiquette-modal").style.display = "none";

    // 2. 이제 진짜 맵(로비)으로 이동!
    document.getElementById("tutorial-page").style.display = "none"; // 튜토리얼 끄기
    document.getElementById("map-page").style.display = "block"; // 지도 켜기

    // 필요하다면 타미/해버미의 알림창 하나 추가
}
function acceptEtiquette() {
    // 1. 서약서 팝업을 숨깁니다.
    const etiquetteModal = document.getElementById("etiquette-modal");
    if (etiquetteModal) {
        etiquetteModal.style.display = "none";
    }

    // 2. 맵이 완전히 활성화되었음을 알리는 소소한 효과 (선택사항)
}
function continueGame() {
    loadGame();

    const saveSection = document.getElementById("save-load-section");
    if (saveSection) saveSection.style.display = "none";

    document.getElementById("login-page").style.display = "none";
    document.getElementById("map-page").style.display = "block";

    // 🌟 [추가] 맵을 켤 때마다 완료자인지 무조건 체크해서 버튼을 살려냅니다!
    const isFinished = localStorage.getItem("adventureFinished");
    const secretBtn = document.getElementById("secret-cert-btn");
    if (isFinished === "true" && secretBtn) {
        secretBtn.style.display = "block";
    }

    // 상단 바 켜기 및 이름 셋팅
    const header = document.getElementById("progress-header");
    if (header) header.style.display = "flex";

    const savedName = localStorage.getItem("explorerName");
    if (savedName) document.getElementById("header-name").innerText = savedName;

    updateProgress();
    currentFloor = 0;
    console.log("⛵ 성공적으로 항해를 이어갑니다!");
}

function checkExistingSave() {
    const savedName = localStorage.getItem("explorerName");
    if (savedName) {
        // 이미 이름이 있다면? "이어하기" 메뉴를 보여줍니다.
        // (간단하게 confirm 창으로 물어봐도 좋고, 전용 UI를 띄워도 좋습니다)
        if (confirm(`${savedName} 탐험가님, 이전에 탐험하던 기록이 있습니다! 이어서 하시겠습니까?`)) {
            loadGame(); // 도감 복구
            document.getElementById("login-page").style.display = "none";
            document.getElementById("map-page").style.display = "block"; // 바로 지도로 이동
        } else {
            // "새로하기"를 선택했다면?
            if (confirm("정말 처음부터 다시 할까요? 모든 도감 기록이 사라집니다!")) {
                localStorage.clear(); // 싹 비우기
                location.reload(); // 새로고침해서 처음부터 시작
            }
        }
    }
}
function showMapPage() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("map-page").style.display = "block";

    // 🌟 [추가] 완료한 탐험가라면 비밀 버튼을 보여준다!
    const isFinished = localStorage.getItem("adventureFinished");
    const secretBtn = document.getElementById("secret-cert-btn");

    if (isFinished === "true" && secretBtn) {
        secretBtn.style.display = "block";
    }
}

function updateProgress() {
    // 🌟 화면에서 실제로 'found' 클래스를 가진 카드가 몇 개인지 직접 셉니다!
    // (기본으로 열려있는 박물관, 해버미 2장도 완벽하게 포함됩니다)
    const foundCards = document.querySelectorAll('.card.found').length;

    // 총 9장 기준 백분율 계산
    let percent = Math.floor((foundCards / 9) * 100);

    // 최대 100% 방어 (텍스트와 게이지 모두에 적용하기 위해 밖으로 뺐습니다)
    if (percent > 100) percent = 100;

    // 1. 숫자 텍스트 업데이트
    const display = document.getElementById("progress-percent");
    if (display) {
        display.innerText = percent;
    }

    // 🚨 2. [새로 추가] 게이지 바 길이(width) 업데이트!
    const fillBar = document.getElementById("progress-bar-fill");
    if (fillBar) {
        fillBar.style.width = percent + "%";
    }
}