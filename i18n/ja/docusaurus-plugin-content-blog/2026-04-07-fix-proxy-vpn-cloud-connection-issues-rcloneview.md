---
slug: fix-proxy-vpn-cloud-connection-issues-rcloneview
title: "RcloneViewでプロキシとVPNのクラウド接続問題を解決する"
authors:
  - tayson
description: "企業プロキシやVPN配下でRcloneViewのクラウド同期・転送が失敗する場合の解決方法。HTTP_PROXY設定、SSL証明書エラー、スプリットトンネリング、DNS解決の問題、ファイアウォール回避のテクニックを解説します。"
keywords:
  - rclone proxy settings
  - rclone VPN connection error
  - rclone corporate proxy fix
  - rclone SSL certificate error
  - rclone HTTPS_PROXY config
  - rclone DNS resolution failure
  - rclone firewall blocked
  - rcloneview proxy configuration
  - rclone split tunneling VPN
  - fix rclone connection behind proxy
tags:
  - RcloneView
  - troubleshooting
  - guide
  - tips
  - security
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでプロキシとVPNのクラウド接続問題を解決する

> 企業のプロキシやVPNは、クラウド同期の接続を分かりにくいタイムアウトや証明書エラーで頻繁に妨げます。このガイドでは、よくあるシナリオを網羅し、ネットワーク制限下でもRcloneViewが確実に動作するように設定する方法を解説します。

多くの組織では、インターネットトラフィックをプロキシサーバー経由でルーティングしたり、リモートワーカーにVPN接続を必須としたりしています。これらの対策はセキュリティを向上させる一方で、クラウドストレージのAPI呼び出しを妨げることがよくあります。Rcloneおよび RcloneViewは、クラウドプロバイダーのエンドポイントへの直接的なHTTPSアクセスを必要とし、あなたのマシンとそれらのエンドポイントの間に存在するもの——プロキシ、ファイアウォール、VPNトンネル、SSLインスペクション装置など——は接続失敗の原因になり得ます。エラーは、タイムアウトやDNS失敗から、TLSハンドシェイクエラーや証明書拒否まで多岐にわたります。このガイドでは、各問題を順に取り上げ、具体的な解決策を示します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTP_PROXYとHTTPS_PROXY環境変数の設定

Rcloneは、ほとんどのネットワークツールで使用されている標準のHTTPプロキシ環境変数を尊重します。組織がインターネットアクセスにプロキシを必須としている場合、rcloneがトラフィックのルーティング先を認識できるよう、これらの変数を設定する必要があります。

### プロキシ変数の設定

**Windows（システム環境変数）:**

1. **設定 > システム > バージョン情報 > 詳細なシステム設定 > 環境変数** を開きます。
2. システム環境変数（またはユーザー環境変数）に、以下を追加します。
   - `HTTP_PROXY` = `http://proxy.company.com:8080`
   - `HTTPS_PROXY` = `http://proxy.company.com:8080`
   - `NO_PROXY` = `localhost,127.0.0.1,.internal.company.com`
3. 新しい変数を反映させるため、RcloneViewを再起動します。

**macOS / Linux（シェルプロファイル）:**

`~/.bashrc`、`~/.zshrc`、または `/etc/environment` に以下を追加します。

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
export NO_PROXY="localhost,127.0.0.1,.internal.company.com"
```

ファイルをsourceするか、ターミナルセッションを再起動してください。

### 認証が必要なプロキシ

プロキシがユーザー名とパスワードを要求する場合、URLに認証情報を含めます。

```
http://username:password@proxy.company.com:8080
```

パスワード内の特殊文字はURLエンコードする必要があります（例: `@` は `%40`、`#` は `%23`）。

### SOCKS5プロキシ

SOCKS5プロキシ（SSHトンネルでよく使われます）の場合は、以下を使用します。

```
socks5://proxy.company.com:1080
```

これを `HTTP_PROXY` と `HTTPS_PROXY` の両方に設定します。

### プロキシ設定の確認

プロキシ経由でrcloneがクラウドプロバイダーに到達できるかテストします。

```bash
rclone lsd remote: --dump headers -v
```

接続が成功すれば、ディレクトリの一覧が表示されます。`--dump headers` フラグはHTTPヘッダーを表示するため、プロキシが使用されていることを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## SSL証明書エラーの解決

SSL/TLS証明書エラーは、企業プロキシ配下で最もよく発生する問題です。多くの組織では、プロキシが組織独自の認証局（CA）を使ってHTTPSトラフィックを復号・再暗号化する、SSLインスペクション（HTTPSインターセプトまたは中間者インスペクションとも呼ばれます）を採用しています。RcloneはデフォルトではこのようなカスタムのCAを信頼しないため、以下のようなエラーが発生します。

- `x509: certificate signed by unknown authority`
- `TLS handshake timeout`
- `SSL certificate problem: unable to get local issuer certificate`

### 解決策: 企業のCA証明書を追加する

1. **企業のルートCA証明書を取得します**。IT部門に依頼してください。通常は `.pem` または `.crt` ファイルです。
2. **`--ca-cert` フラグを使い、rcloneにそれを信頼させます。**
   ```bash
   rclone lsd remote: --ca-cert /path/to/corporate-ca.pem
   ```
3. **rcloneの設定環境に設定し、恒久化します。** シェルプロファイルに以下を追加します。
   ```bash
   export RCLONE_CA_CERT="/path/to/corporate-ca.pem"
   ```
4. RcloneViewでは、リモートまたはジョブ設定でカスタムフラグとして `--ca-cert /path/to/corporate-ca.pem` を追加します。

### 解決策: CAをシステムの信頼ストアに追加する

代わりに、企業のCAをOSの信頼ストアに追加し、（rcloneを含む）すべてのアプリケーションが自動的にそれを信頼するようにする方法もあります。

**Windows:**
```
certutil -addstore "Root" corporate-ca.crt
```

**macOS:**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-ca.crt
```

**Linux（Debian/Ubuntu）:**
```bash
sudo cp corporate-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### 最終手段: SSL検証を無効化する

企業のCA証明書を入手できない場合、SSL検証を完全に無効化することもできます。ただし、これは実際の中間者攻撃に対する保護を失うことになるため、本番環境での使用は**推奨されません**。

```bash
rclone lsd remote: --no-check-certificate
```

これは、証明書が問題の原因であることを確認するためのテスト目的でのみ使用し、その後は適切なCA証明書による解決策を採用してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## VPN配下でのDNS問題の解決

VPN接続は、システムのDNS設定を上書きすることが多く、これによりクラウドプロバイダーのドメインが解決できなくなったり、誤ったアドレスに解決されたりすることがあります。

### 症状

- `dial tcp: lookup storage.googleapis.com: no such host`
- `dial tcp: lookup graph.microsoft.com: i/o timeout`
- VPN接続前は機能していた接続が、VPN接続後に失敗する。

### 解決策

**DNS解決を確認する:**

```bash
nslookup storage.googleapis.com
nslookup graph.microsoft.com
nslookup api.dropboxapi.com
```

VPN接続中にこれらが失敗したり、予期しないIPを返したりする場合は、DNSが原因です。

**特定のDNSサーバーを使用する:**

VPNクライアントによっては、DNS設定を構成できるものがあります。VPNが、パブリッククラウドプロバイダーのドメインを解決できるDNSサーバーを使用していることを確認してください。VPNが外部ドメインを解決できない内部DNSサーバーの使用を強制する場合は、IT担当チームにクラウドプロバイダーのドメイン向けのDNSフォワーディングルールの追加を依頼してください。

**手動でのDNSオーバーライド（一時的な対処）:**

一時的な回避策として、クラウドプロバイダーのエンドポイントをhostsファイルに追加します。

- Windows: `C:\Windows\System32\drivers\etc\hosts`
- macOS/Linux: `/etc/hosts`

クラウドプロバイダーはIPアドレスをローテーションするため、これは不安定な方法ですが、適切なDNS修正が行われるまでの間、ブロックを解除する手段になります。

変更後は**DNSキャッシュをフラッシュ**してください。

```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemd-resolve --flush-caches
```

## スプリットトンネリングの設定

スプリットトンネリングは、企業トラフィックのみをVPN経由でルーティングし、クラウドストレージのトラフィックはインターネットへ直接送信する方式です。これにより、クラウドプロバイダーへの接続でプロキシとVPNの両方を回避でき、多くの場合すべての問題を一度に解決できます。

### 設定方法

スプリットトンネリングは通常、VPNクライアントまたはIT部門によって設定されます。以下のドメインまたはIP範囲をVPNトンネルから除外するよう依頼する必要があります。

**Google Drive / Google Cloud:**
- `*.googleapis.com`
- `*.google.com`
- `accounts.google.com`

**Microsoft OneDrive / SharePoint / Azure:**
- `*.sharepoint.com`
- `*.onedrive.com`
- `graph.microsoft.com`
- `login.microsoftonline.com`
- `*.blob.core.windows.net`

**Amazon S3:**
- `*.amazonaws.com`
- `s3.*.amazonaws.com`

**Dropbox:**
- `*.dropbox.com`
- `*.dropboxapi.com`

**その他のプロバイダー:** APIエンドポイントのドメインについては、各プロバイダーのドキュメントを確認してください。

IT部門がスプリットトンネリングを設定できない場合は、上記のプロキシおよび証明書に関する解決策が最善の代替手段となります。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 企業ファイアウォールの回避

企業ファイアウォールは、rcloneが必要とする特定のポート、プロトコル、またはドメインをブロックすることがあります。ファイアウォール関連のよくある問題は以下のとおりです。

### ブロックされたポート

Rcloneはほとんどのクラウドプロバイダーに対してHTTPS（ポート443）を使用します。非ブラウザトラフィックに対してポート443がブロックされている場合、rcloneの接続はタイムアウトします。rcloneプロセスに対して送信HTTPSが許可されているか、IT部門に確認してください。

### ブロックされたドメイン

一部のファイアウォールは、特定のクラウドストレージのドメインへのアクセスをブロックします。組織が特定のクラウドプロバイダーを公式にサポートしていない場合、そのAPIエンドポイントがブロックリストに含まれている可能性があります。この場合、タイムアウトエラーや接続拒否のメッセージが表示されます。唯一の解決策は、IT担当チームに必要なドメインの許可リストへの追加を依頼することです。

### ディープパケットインスペクション

一部の次世代ファイアウォールは、証明書レベルを超えてHTTPSトラフィックを検査します。標準的なブラウザトラフィックに見えない接続をブロックする場合があります。RcloneのUser-Agentヘッダーはrcloneであることを示しており、一部のDPIルールがこれをフラグ付けすることがあります。カスタムのUser-Agentを設定できます。

```bash
rclone lsd remote: --user-agent "Mozilla/5.0"
```

これは回避策であり、必要性が確認され、IT担当チームによって承認された場合にのみ使用してください。

### プロキシ経由でのOAuthトークンのリフレッシュ

OAuthを使用するクラウドプロバイダー（Google Drive、OneDrive、Dropbox）は、定期的にアクセストークンをリフレッシュします。トークンリフレッシュ用のエンドポイントがブロックされていたり、プロキシがOAuthフローを妨げていたりすると、認証情報が正しいにもかかわらず認証エラーが発生します。以下のOAuthエンドポイントにアクセスできることを確認してください。

- `oauth2.googleapis.com`（Google）
- `login.microsoftonline.com`（Microsoft）
- `api.dropbox.com/oauth2/token`（Dropbox）

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 接続タイムアウトのトラブルシューティング

プロキシやVPN配下で接続がタイムアウトする場合は、以下の手順で原因を絞り込みます。

1. **基本的な接続性をテストする:**
   ```bash
   curl -v https://storage.googleapis.com
   ```
   curlは動作するがrcloneは動作しない場合、プロキシ環境変数がrcloneに認識されていないことが原因である可能性が高いです。

2. **詳細なログを有効にしてテストする:**
   ```bash
   rclone lsd remote: -vv --dump headers --dump auth
   ```
   これにより、rcloneが実際に送受信している内容を正確に確認できます。

3. **プロキシによる干渉を確認する:**
   ```bash
   rclone lsd remote: --no-check-certificate -vv
   ```
   これは動作するが通常のコマンドは動作しない場合、SSLインスペクションが原因です。

4. **VPNなしでテストする**（可能な場合）。これにより、VPNが関与しているかどうかを確認できます。

5. **プロキシ接続が遅い場合は、タイムアウトを延長します。**
   ```bash
   rclone lsd remote: --timeout 60s --contimeout 30s
   ```

6. 詳細なエラーメッセージについては、**ジョブ履歴のRcloneViewログを確認してください。**

## RcloneViewでの永続的な設定

プロキシ設定、証明書のパス、フラグの適切な組み合わせを見つけたら、それを保存しておき、後で再度調べる手間を省きましょう。

- **環境変数** — `HTTP_PROXY`、`HTTPS_PROXY`、`RCLONE_CA_CERT` をシステムプロファイルに設定し、すべてのrclone操作に適用されるようにします。
- **ジョブ内のカスタムフラグ** — RcloneViewのジョブ設定で、`--ca-cert`、`--timeout`、`--contimeout` などのフラグをカスタムパラメーターとして追加します。
- **リモートごとの設定** — 一部の設定は、`rclone.conf` のリモート設定に直接追加できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロードします。**
2. ネットワークでプロキシが必要な場合は、**プロキシ環境変数を設定します。**
3. SSLインスペクションが使用されている場合は、**企業のCA証明書をインストールします。**
4. 同期ジョブを設定する前に、シンプルな `rclone lsd remote:` コマンドで**接続をテストします。**
5. 一貫性のある繰り返し可能な同期のために、**動作する設定をRcloneViewのジョブとして保存します。**

ネットワーク制限があっても、クラウドストレージを効果的に管理できないわけではありません。適切なプロキシ設定と証明書設定があれば、RcloneViewは最も厳格に制限された企業環境でも確実に動作します。

---

**関連ガイド:**

- [リモートストレージの追加](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [OAuthオンラインログインの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [ジョブの実行と管理](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
