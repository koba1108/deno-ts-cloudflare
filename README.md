# deno-ts-cloudflare
deno-ts-cloudflare


## Usage

### 1. Create .denoflare from .denoflare.template 
```shell
$ cp .denoflare.template .denoflare
```

### 2. Edit .denoflare
```json
{
    "profiles": {
        "account1": {
            "accountId": "cloudflareのアカウントID",
            "apiToken": "cloudflareのAPIトークン"
        }
    }
}
```

### 3. Run script in local

```shell
$ denoflare serve hello
```

### 4. Deploy to Cloudflare Workers

```shell
$ denoflare push hello --name hello
```

※ cloudflare側でhttpのroutingの設定が必要です。
