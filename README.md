# Vue.js Training

## プロジェクト作成

[Vue CLI](https://cli.vuejs.org/)の`vue create`コマンドを使用してプロジェクトを作成しています。

### 設定

以下のオプション機能を追加しています。

- [Babel](https://babeljs.io/)
- [Vue Router](https://router.vuejs.org/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 開発環境構築

[Node.js](https://nodejs.org)をローカル PC にグローバルインストールし、当リポジトリを clone 後に以下のコマンドを実行してください。

### 依存パッケージインストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run serve
```

### VSCode

`User/settings.json`に以下を追記しておくとファイル保存時に自動フォーマットが走ります。

```json
"editor.formatOnSave": true
```

### Google Chrome 拡張機能

Chrome ウェブストアから[Vue.js devtool](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)をインストールしておくと検証ツール上で簡単にデバッグできます。

## 本番用ビルド

```bash
npm run build
```

## Lint

```bash
npm run lint
```
