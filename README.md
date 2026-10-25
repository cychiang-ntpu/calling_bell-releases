# CRCL-BELL 紅外線非接觸式眼控叫人鈴

**讓無法說話、無法動手的病友，用「看」來叫人。**

這裡是 Windows 版軟體的**安裝檔發布頁**（見右側 Releases）。程式本身會到這一頁檢查新版本，有新版時在畫面上提示、一鍵更新。原始碼在另一個私有的 repo，這裡沒有程式碼。

[English summary below](#english-summary)

---

## 這是什麼

漸凍人（運動神經元疾病，ALS／MND）病友到了後期，往往連按鈴的力氣都沒有，只剩眼睛能動。市面上的眼控設備動輒數萬到數十萬元，而且要校正、要學。

CRCL-BELL 是一個**便宜、不用校正、看兩下就會響**的叫人鈴：

- 裝置是一個小盒子，夾在床邊或桌邊，放在病友眼前 50 到 70 公分處。盒子上有三顆看不見的紅外線小燈與一顆攝影機。
- 病友**依序注視**小燈（預設先看右邊、再看左邊，每顆約一秒），電腦就響鈴叫人。看錯順序或只是隨便看一眼不會響。
- 不碰病友、不用貼任何東西、不用校正，換一個人也能直接用。
- 一台 Windows 電腦加這個盒子就能跑。

它的原理是「主動照明」：三顆小燈輪流閃，在角膜上留下三個反光點，攝影機從反光點與瞳孔的相對位置判斷病友在看哪一顆燈。細節見下方〈怎麼運作〉。

## 給誰用、怎麼取得

這套系統是為**社團法人中華民國運動神經元疾病病友協會**（漸凍人協會）的病友開發的，第一批成品由協會配給有需要的病友試用。

- **病友與家屬**：請透過協會聯繫申請試用；協會會安排裝置、教學與回饋收集。
- **其他照護單位或研究者**：歡迎來信討論（見〈聯絡〉）。目前仍是候選版，正在協會的實地測試中，尚未作為一般商品販售。
- **軟體**：下載右側 Releases 最新的 `CallingBell_Native_Setup_v<版本>.exe` 安裝即可；沒有盒子也能開啟程式看介面。安裝需求與步驟見下方〈安裝〉。

## 怎麼運作（簡述）

1. 盒子上三顆紅外線 LED 排成倒三角形，由控制板輪流點亮。
2. 攝影機每秒拍數十到一百多張，相鄰兩張相減，只留下「這一張亮、上一張暗」的地方，就是三顆燈在角膜上的反光點。
3. 三個反光點拼成一個小三角形；同時用霍夫圓偵測找出瞳孔。
4. 瞳孔中心最靠近哪一個反光點，病友就是在看哪一顆燈。連續約一秒都看同一顆才算數。
5. 依設定的順序（例如右→左）看完，就響鈴；幾秒內沒看完下一步會自動取消，避免誤響。

程式是純 C 寫的原生 Windows 程式，不需要安裝其他軟體；介面有繁體中文、英文、越南文、印尼文、馬來文、菲律賓文、泰文、高棉文八種語言，照顧外籍看護的需求。

**紅外線安全**：使用的是與電視遙控器同類的近紅外線，依零件規格估算，在 50 到 70 公分的使用距離下遠低於國際標準（IEC 62471）的限值；團隊並規劃委託第三方檢測單位出具整機的正式報告。使用建議：裝置放在 50 到 70 公分處，不要把眼睛貼近小燈直視；若覺得眼睛疲勞或不舒服，請立刻停止使用並告知團隊。

## 安裝

需求：Windows 10 或 11（64 位元）的筆電或桌機，兩個空的 USB 孔（攝影機與控制線各一），喇叭可以出聲。安裝不需要系統管理員密碼。

1. 下載 Releases 裡最新的安裝檔並執行。
2. **出現藍色「Windows 已保護您的電腦」**：按「其他資訊」→「仍要執行」。安裝檔目前沒有數位簽章（程式碼簽章憑證申請中），這個畫面是正常的。
3. **出現「Smart App Control 已封鎖此應用程式」**（Windows 11 新機）：到 設定 → 隱私權與安全性 → Windows 安全性 → 應用程式與瀏覽器控制 → Smart App Control，選「關閉」後再安裝。
4. 第一次使用時電腦要連上網路一次，在程式裡按一個按鈕安裝控制盒的驅動程式。
5. 之後有新版本時，程式啟動後會在畫面最上方提示，按「下載並安裝」即可。

升級不會覆蓋你調好的設定。

## 計畫與團隊

本系統由**「漸凍人協會眼控叫人鈴研發計畫」**支持，是國立臺北大學與漸凍人協會的合作計畫（2026 年），目標是把實驗室的雛形做成病友可以實際使用、協會日後能自行維運與再製的成品。

| | |
|---|---|
| 執行單位 | 國立臺北大學 通訊工程學系 SMSPL 實驗室 |
| 合作單位 | 社團法人中華民國運動神經元疾病病友協會 |
| 計畫主持人 | 江振宇 副教授 |
| 協同主持人 | 李忠益 副教授 |
| 主要研發人員 | 林恭緯、洪子軒、盧穎良、王韋智、汪澤天 |

技術基礎來自林恭緯同學的碩士論文（主動照明與反光點幾何驗證、瞳孔定位），本期工作把它做成一體式硬體、一般人能安裝的軟體、多國語言介面與可再製的文件。

## 聯絡

- **技術與合作**：江振宇 副教授，國立臺北大學通訊工程學系 — cychiang@mail.ntpu.edu.tw
- **病友申請試用**：請洽漸凍人協會。
- **軟體問題回報**：請附上程式安裝資料夾裡的紀錄檔（`callbell.log`）與發生的時間、情況，寄到上面的信箱。

## 現況與聲明

- 目前為**候選版**（版本號帶 rc），正在協會的實地測試中；驗收目標為觸發正確率高於 90%、誤響低於每小時 0.2 次，尚待以交付的成品實際驗證。
- 本系統是輔助溝通的叫人工具，**不是醫療器材**，不能取代人員的照護與巡視。
- 安裝檔尚未簽章；下載請認明本頁的 Releases。

---

## English summary

**CRCL-BELL** is a low-cost, calibration-free, non-contact **eye-controlled call bell** for people with ALS/MND who can no longer speak or move their hands. A small box with three invisible infrared LEDs and a camera sits 50–70 cm in front of the patient; looking at the LEDs in a set order (e.g. right, then left, about one second each) rings a bell on a Windows PC. Nothing touches the patient and no calibration is needed.

It works by active illumination: the LEDs flash in turn, leaving three corneal glints that form a small triangle; the pupil is located with a Hough circle, and the glint nearest the pupil centre tells which LED is being watched. The software is a native C Windows program with an eight-language interface (Traditional Chinese, English, Vietnamese, Indonesian, Malay, Filipino, Thai, Khmer).

This page hosts the **Windows installers** only (see Releases); the program checks here for updates. The source lives in a private repository.

Developed by the SMSPL lab, Department of Communication Engineering, **National Taipei University**, in cooperation with the **Taiwan Motor Neuron Disease Association**, under the 2026 "Eye-controlled call bell for the MND Association" project. PI: Prof. Chen-Yu Chiang (team members are listed in the Chinese section above). Contact: cychiang@mail.ntpu.edu.tw. Release candidates are under field testing; this is an assistive call device, not a medical device.
