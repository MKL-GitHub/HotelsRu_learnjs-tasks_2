// Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url

// Для https запросов заголовок Referer не существует, поскольку
// не является безопасным.
// Origin, в свою очередь является безопасным и при запросах на другие
// источники, браузер гарантирует наличие этого заголовка.