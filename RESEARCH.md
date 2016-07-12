
# Research notes

- Node.js leverage *libuv* library (multiplatform version of *libev*) and a high performance [http parser](https://github.com/nodejs/http-parser)
- UWSGI + Nginx (wsgi communicaton) for Python is the most performant way of desserving Python apps
   - Nginx parse HTTP and send it as binary data to uwsgi
   - UWSGI act as a process manager. It starts (--processes) applications and keep them alive to process queries
- H2O is a new http server using *libuv* with performant [HTTP parser (PicoHttpParser)](https://github.com/h2o/picohttpparser)

- About Node.js HTTP parser vs H2O picohttpparser [How we’ve made Phusion Passenger 5 (“Raptor”) up to 4x faster than Unicorn...](http://www.rubyraptor.org/how-we-made-raptor-up-to-4x-faster-than-unicorn-and-up-to-2x-faster-than-puma-torquebox/)
