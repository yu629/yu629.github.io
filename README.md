# yu629.github.io

### NSTimer 定时器

小试牛刀.

1,添加定时器:
timer = [NSTimer scheduledTimerWithTimeInterval:0.5 target:self selector:@selector(updateProgress) userInfo:nil repeats:YES];
然后用runloop进行监听,在用户做别的操作情况下不影响计时器操作
[[NSRunLoop currentRunLoop] addTimer:timer forMode:NSDefaultRunLoopMode];

2,移除定时器
[timerinvalidate];
timer = nil;
***
需要注意的是,无论在什么时候去掉定时器的时候一定要在主线程中把定时器去掉
dispatch_async(dispatch_get_main_queue(), ^{
        [self removetimer];
        [self addtimer];
    })
