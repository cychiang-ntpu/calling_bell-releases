# calling_bell-releases

CRCL-BELL 紅外線非接觸式眼控叫人鈴（Windows 原生版）的**安裝檔發布 repo**。給使用者看的介紹在網站：
**https://cychiang-ntpu.github.io/calling_bell-releases/**

這個 repo 給開發者的說明：

- **只放安裝檔，沒有原始碼。** 原始碼在私有 repo `williamwill1860/calling_bell`。
- **Releases 由 CI 自動建立**：私有 repo 推 `v*` tag → GitHub Actions 建置、測試、用 Inno Setup 打包 → 同一個安裝檔同時發到私有 repo 與這裡（workflow 用一個只能寫這個 repo 的 fine-grained token）。發布說明取自私有 repo 的 VERSION.md 該版段落。手動備援是私有 repo 的 `tools/publish_release.ps1`。
- **程式的自動更新就是讀這裡**：啟動 20 秒後與每 24 小時 GET `https://api.github.com/repos/cychiang-ntpu/calling_bell-releases/releases`，取第一個非草稿、有 `.exe` 資產的 release，tag 依 semver 比較（含 `-rc.N` 預發行段）；比目前新就在介面上提示，使用者按「下載並安裝」才下載。**tag 必須是 `v主.次.修[-預發行]`**，否則被當成 0.0.0、永遠不算新。
- **網站**：`index.html`（GitHub Pages，main 分支根目錄），用 JavaScript 讀同一個 API 顯示最新版本與下載按鈕，不需要每版改網頁。
- **安裝檔未簽章**：SmartScreen 與 Smart App Control 會擋，程式碼簽章憑證申請中。

計畫：「漸凍人協會眼控叫人鈴研發計畫」（國立臺北大學通訊工程學系 SMSPL 實驗室 × 社團法人中華民國運動神經元疾病病友協會，2026）。
聯絡：江振宇 副教授 cychiang@mail.ntpu.edu.tw
