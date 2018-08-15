import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import data from '../../json/data.json';
import './Trucks.css';

export default class Trucks extends Component {
  
  render() {
    return (
      <div>
        {data.map(truck => {

          return <div className="trucks" key={truck.id}>
            <Card className="cardTruck">
              <CardHeader
                avatar={<Avatar aria-label="Recipe" className="avatar">Trk</Avatar>}
                title={truck.device}
                subheader={truck.status}
              />
              <CardContent>
                <div className="contentCard">
                  <div className="titleCard">Label:</div>
                  <div className="subtitleCard">{truck.attrs[1][0].label}</div>
                </div>
                <div className="contentCard">
                  <div className="titleCard">Value:</div>
                  <div className="subtitleCard">{truck.attrs[1][0].static_value}</div>
                </div>
                <div className="contentCard">
                  <div className="titleCard">ID Template:</div>
                  <div className="subtitleCard">{truck.attrs[1][0].template_id}</div>
                </div>
                <div className="contentCard">
                  <div className="titleCard">Type:</div>
                  <div className="subtitleCard">{truck.attrs[1][0].type}</div>
                </div>
                <div className="contentCard">
                  <div className="titleCard">Value Type:</div>
                  <div className="subtitleCard">{truck.attrs[1][0].value_type}</div>
                </div>
              </CardContent>
            </Card>
          </div>

        })}

      </div>
    );
  }
}
