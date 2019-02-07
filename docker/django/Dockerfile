FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /django
WORKDIR /django
COPY requirements.txt /django/
RUN pip3 install -r requirements.txt