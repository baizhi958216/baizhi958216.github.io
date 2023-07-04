# NodeJS v17 的 OpenSSL 更新

若依 UI 使用 Vue2，Webpack 4 在项目打包时会调用一个[哈希函数](https://github.com/webpack/webpack/blob/webpack-4/lib/optimize/SplitChunksPlugin.js#L24)，该函数使用`md4`算法进行加密(hack coded)。

:::code-group

```js [webpack/lib/optimize/SplitChunksPlugin.js]
// ...
const hashFilename = name => {
	return crypto
		.createHash("md4")
		.update(name)
		.digest("hex")
		.slice(0, 8);
};
// ...
```

:::

NodeJS v17 进行了 OpenSSL 的版本升级（3.0），crypto 模块默认使用的是`Default provider`，而`md4`恰好在`Legacy provider`。

:::tip providers

- [Default provider](https://www.openssl.org/docs/man3.0/man7/OSSL_PROVIDER-default.html)
- [Base provider](https://www.openssl.org/docs/man3.0/man7/OSSL_PROVIDER-base.html)
- [FIPS provider](https://www.openssl.org/docs/man3.0/man7/OSSL_PROVIDER-FIPS.html)
- [Legacy provider](https://www.openssl.org/docs/man3.0/man7/OSSL_PROVIDER-legacy.html)
- [Null provider](https://www.openssl.org/docs/man3.0/man7/OSSL_PROVIDER-null.html)

:::

导致编译报错:

:::details 错误记录

```cmd
10% building 2/3 modules 1 active ..._webpack@4.46.0\node_modules\eslint-loader\index.js??ref--13-0!C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\src\main.jsError: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:138:10)
    at module.exports (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\util\createHash.js:135:53)
    at NormalModule._initBuildHash (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\NormalModule.js:417:16)
    at handleParseError (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\NormalModule.js:471:10)
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\NormalModule.js:503:5
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\NormalModule.js:358:12
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:373:3
    at iterateNormalLoaders (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:214:10)
    at iterateNormalLoaders (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:221:10)
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:236:3
    at runSyncOrAsync (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:130:11)
    at iterateNormalLoaders (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:232:2)
    at Array.<anonymous> (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:205:4)
    at Storage.finished (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\enhanced-resolve@4.5.0\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:55:16)
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\enhanced-resolve@4.5.0\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:91:9
10% building 2/5 modules 3 active ...1.3_webpack@4.46.0\node_modules\webpack-dev-server\client\index.js?http://192.168.109.1:81&sockPath=/sockjs-nodenode:internal/crypto/hash:69
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:138:10)
    at module.exports (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\util\createHash.js:135:53)
    at NormalModule._initBuildHash (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\NormalModule.js:417:16)
    at handleParseError (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\NormalModule.js:471:10)
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\NormalModule.js:503:5
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\webpack@4.46.0\node_modules\webpack\lib\NormalModule.js:358:12
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:373:3
    at iterateNormalLoaders (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:214:10)
    at Array.<anonymous> (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\loader-runner@2.4.0\node_modules\loader-runner\lib\LoaderRunner.js:205:4)
    at Storage.finished (C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\enhanced-resolve@4.5.0\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:55:16)
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\enhanced-resolve@4.5.0\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:91:9
    at C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui\node_modules\.pnpm\graceful-fs@4.2.11\node_modules\graceful-fs\graceful-fs.js:123:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v20.3.0
 ELIFECYCLE  Command failed with exit code 1.
PS C:\Users\14752\dev\RuoYi-Vue\ruoyi-ui>
```

:::

:::danger 在 NodeJS v17 中尝试使用md4

```ts
import { createHash } from "crypto";

createHash("md4");
```

报错信息:

```cmd
Uncaught Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:138:10) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

:::

## 解决办法

:::tip NodeJS v17发行日志:

If you hit an ERR_OSSL_EVP_UNSUPPORTED error in your application with Node.js 17, it’s likely that your application or a module you’re using is attempting to use an algorithm or key size which is no longer allowed by default with OpenSSL 3.0. A command-line option, --openssl-legacy-provider, has been added to revert to the legacy provider as a temporary workaround for these tightened restrictions.

:::

指定 OpenSSL 使用 Legacy provider

Bash:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

CMD:

```cmd
set NODE_OPTIONS=--openssl-legacy-provider
```

PowerShell:

```ps
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```
