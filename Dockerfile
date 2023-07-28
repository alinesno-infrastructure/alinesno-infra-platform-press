# 该镜像需要依赖的基础镜像
FROM registry.cn-shenzhen.aliyuncs.com/alinesno-base/nginx-alpha:1.1.4

WORKDIR /usr/share/nginx/html
COPY docs/.vuepress/dist ./

# 声明服务运行在80端口
EXPOSE 80
