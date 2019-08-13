import { ShortcutItem } from './ShortcutItem';

import { ShortcutObject, TakenByObject } from '..';

import { JupyterFrontEnd } from '@jupyterlab/application';

import * as React from 'react';

import {
  ShortcutListStyle,
  ShortcutListContainerStyle
} from '../componentStyle/ShortcutListStyle';

const TOPNAV_HEIGHT: number = 115;

/** Props for ShortcutList component */
export interface IShortcutListProps {
  shortcuts: ShortcutObject[];
  handleUpdate: Function;
  resetShortcut: Function;
  deleteShortcut: Function;
  showSelectors: boolean;
  keyBindingsUsed: { [index: string]: TakenByObject };
  sortConflict: Function;
  clearConflicts: Function;
  height: number;
  errorSize: string;
  contextMenu: Function;
  app: JupyterFrontEnd;
}

/** React component for list of shortcuts */
export class ShortcutList extends React.Component<IShortcutListProps, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div
        className={ShortcutListContainerStyle(TOPNAV_HEIGHT, this.props.height)}
        id="shortcutListContainer"
      >
        <div className={ShortcutListStyle}>
          {this.props.shortcuts.map((shortcut: ShortcutObject) => {
            return (
              <ShortcutItem
                key={shortcut.commandName + '_' + shortcut.selector}
                resetShortcut={this.props.resetShortcut}
                shortcut={shortcut}
                handleUpdate={this.props.handleUpdate}
                deleteShortcut={this.props.deleteShortcut}
                showSelectors={this.props.showSelectors}
                keyBindingsUsed={this.props.keyBindingsUsed}
                sortConflict={this.props.sortConflict}
                clearConflicts={this.props.clearConflicts}
                errorSize={this.props.errorSize}
                contextMenu={this.props.contextMenu}
                app={this.props.app}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
