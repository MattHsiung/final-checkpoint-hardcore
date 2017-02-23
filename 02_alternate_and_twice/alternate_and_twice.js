const alternate = f => _ => (f.on = !f.on) && f();

const twice = f => (f.call = 2) && (() => +(f.call-- > 0) && f());