import * as React from 'react';
import styles from './Cruddemo.module.scss';
import { ICruddemoProps } from './ICruddemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Cruddemo extends React.Component<ICruddemoProps, {}> {
  public render(): React.ReactElement<ICruddemoProps> {
    return (
      <div className={ styles.cruddemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
