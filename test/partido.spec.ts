import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import Partido from '../models/partido';

chai.use(chaiHttp).should();

describe('Estados', () => {

  beforeEach(done => {
    Partido.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for estados', () => {

    it('should get all the estados', done => {
      chai.request(app)
        .get('/api/estados')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get estados count', done => {
      chai.request(app)
        .get('/api/estados/count')
        .end((err, res) => {
          res.should.have.status(200);
            res.body.should.be.a('number');
            res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new complaint', done => {
      const complaint = new Partido(
          {
              title: 'Propaganda enganosa e falta de suporte ao cliente',
              description: 'Estou no 6 dia dos 7 que vocês dão de garantia caso não goste ou não funcione o aplicativo Loto Sniper',
              locale:  "5f7f33c40f20e76bfe8d65c6",
              company: "5f7f34330f20e76bfe8d65c7"
          });
      chai.request(app)
        .post('/api/complaint')
        .send(complaint)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.a.property('title');
          res.body.should.have.a.property('description');
          res.body.should.have.a.property('locale');
          res.body.should.have.a.property('company');
          done();
        });
    });

    it('should get a complaint by its id', done => {
      const complaint = new Partido({
          title: 'Propaganda enganosa e falta de suporte ao cliente',
          description: 'Estou no 6 dia dos 7 que vocês dão de garantia caso não goste ou não funcione o aplicativo Loto Sniper',
          locale:  "5f7f33c40f20e76bfe8d65c6",
          company: "5f7f34330f20e76bfe8d65c7"
      });
      complaint.save((error, newComplaint) => {
        chai.request(app)
          .get(`/api/complaint/${newComplaint.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('description');
            res.body.should.have.property('locale');
            res.body.should.have.property('company');
            res.body.should.have.property('_id').eql(newComplaint.id);
            done();
          });
      });
    });

    it('should update a complaint by its id', done => {
      const complaint = new Partido(
          {
              title: 'Propaganda enganosa e falta de suporte ao cliente',
              description: 'Estou no 6 dia dos 7 que vocês dão de garantia caso não goste ou não funcione o aplicativo Loto Sniper',
              locale:  "5f7f33c40f20e76bfe8d65c6",
              company: "5f7f34330f20e76bfe8d65c7"
          });
      complaint.save((error, newComplaint) => {
        chai.request(app)
          .put(`/api/complaint/${newComplaint.id}`)
          .send({ title: 'Propaganda enganosa' })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a complaint by its id', done => {
      const complaint = new Partido(
          {
              title: 'Propaganda enganosa e falta de suporte ao cliente',
              description: 'Estou no 6 dia dos 7 que vocês dão de garantia caso não goste ou não funcione o aplicativo Loto Sniper',
              locale:  "5f7f33c40f20e76bfe8d65c6",
              company: "5f7f34330f20e76bfe8d65c7"
          });
      complaint.save((error, newComplaint) => {
        chai.request(app)
          .del(`/api/complaint/${newComplaint.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});


