```
.mb-progress-bar {
    width: 100%;
    height: 6px;
    opacity: 0;
    transition: opacity 0.5s;
    transition-delay: 0.2s;
    // &表示串联选择器，下面的情况表示  .mb-progress-bar.loading 即选择既拥有mb-progress-bar属性又拥有loading属性的元素
    &.loading {
        opacity: 1;
    }

    .percentage {
        height: 100%;
        background: @mb-theme-color;
        transition: width 0.5s;
    }
}
```

进度条容器(`.mb-progress-bar`)的透明度为0(纯透明),当加载时，进度条容器有`loading`这样的classname，这时透明度为1(不透明),当加载完毕之后，进度条容器失去了`loading`classname，其透明度又会变为0(纯透明),opacity的值经历了“0 - 1 - 0”的变化， transition指定了这对opacity的这种变化对应的动画效果：opacity值的每一次变化消耗的时间为0.5s,在过渡效果开始前等待0.2秒。

进度条（`.percentage`)的长度会发生变化，transition指定了长度的每一次变化消耗的时间(过渡时间)为0.5s
