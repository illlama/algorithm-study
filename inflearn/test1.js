async function f() {
  try {
    console.log("a");
    delay(3);
    console.log("b");
  } catch (e) {
    console.log(123);
  }
}

function delay(t) {
  throw Error();
  return setTimeout(function () {
    console.log("...");
  }, t * 1000);
}

f();

//async는 프로미스를 무조건 반환하니까
