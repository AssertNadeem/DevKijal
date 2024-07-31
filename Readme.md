-Trace

-Change Playwright config file information as
a. retries 1,
b. trace: 'on-first-retry',

command - start and stop the trace.
//await context.tracing.start({snapshots:true, screenshots:true});

//wait context.tracing.stop({path:'test2_trace.zip'});

//show trace
npx playwright show-trace ./test-results/example-Westpac-wrong-login-information-test-retry1/trace.zip