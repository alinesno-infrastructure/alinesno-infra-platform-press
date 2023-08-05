#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_链路可视化.md",
"03_性能分析.md",
"04_异常追踪.md",
"05_分布式事务追踪.md",
"06_日志关联.md",
"07_监控指标.md",
"08_跨系统追踪.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done
