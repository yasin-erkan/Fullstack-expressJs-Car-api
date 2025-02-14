exports.logger = (req, res, next) => {
    console.log(
      "💥 request has just came!!💥",
      "Method:",
      req.method + " URL:" + req.url
    );
  
    // arayazılımdan sonra çalışıcak olan fonksiyon çalışsın:
    next();
  };