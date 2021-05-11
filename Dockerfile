FROM node:14.15.3

WORKDIR /usr/src/smart-brain-facebackend

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]