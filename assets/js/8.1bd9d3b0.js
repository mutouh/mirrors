(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{273:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"containerd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#containerd"}},[s._v("#")]),s._v(" containerd")]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("谷歌 Kubernetes "),t("code",[s._v("k8s.gcr.io")]),s._v(" 使用国内阿里源。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\nserver = "https://k8s.gcr.io"\n\n[host."https://registry.aliyuncs.com/v2/google_containers"]\n  capabilities = ["pull", "resolve"]\n  override_path = true\n\'')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/containerd/certs.d/k8s.gcr.io/hosts.toml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@wrk-1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ctr --debug images pull --hosts-dir "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/containerd/certs.d"')]),s._v(" k8s.gcr.io/pause:3.8\nDEBU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" fetching                                      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k8s.gcr.io/pause:3.8"')]),s._v("\nDEBU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" loading "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" directory                        "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/containerd/certs.d/k8s.gcr.io\nDEBU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" resolving                                     "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry.aliyuncs.com\nDEBU"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" request                                    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry.aliyuncs.com request.header.accept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application/vnd.docker.distribution.manifest.v2+json, application/vnd.docker.distribution.manifest.list.v2+json, application/vnd.oci.image.manifest.v1+json, application/vnd.oci.image.index.v1+json, */*"')]),s._v(" request.header.user-agent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("containerd/1.6.6 request.method"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("HEAD "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.aliyuncs.com/v2/google_containers/pause/manifests/3.8?ns=k8s.gcr.io"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[s._v("#")]),s._v(" 链接")]),s._v(" "),t("p",[s._v("官方关于 containerd "),t("a",{attrs:{href:"https://github.com/containerd/containerd/blob/main/docs/hosts.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("hosts"),t("OutboundLink")],1),s._v(" 的说明文档。")])])}),[],!1,null,null,null);t.default=e.exports}}]);