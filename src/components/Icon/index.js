import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Filter } from '../../assets/icons/ic_filter.svg';
import { ReactComponent as LoginAs } from '../../assets/icons/ic_login_as.svg';
import { ReactComponent as Search } from '../../assets/icons/ic_search.svg';
import { ReactComponent as File } from '../../assets/icons/ic_file.svg';
import { ReactComponent as AddFile } from '../../assets/icons/ic_add_file.svg';
import { ReactComponent as Plus } from '../../assets/icons/ic_plus.svg';
import { ReactComponent as Back } from '../../assets/icons/ic_back.svg';
import { ReactComponent as FileBig } from '../../assets/icons/ic_file_big.svg';
import { ReactComponent as Delete } from '../../assets/icons/ic_trash.svg';
import { ReactComponent as Tick } from '../../assets/icons/ic_tick.svg';
import { ReactComponent as Book } from '../../assets/icons/ic_book.svg';
import { ReactComponent as Close } from '../../assets/icons/ic_close.svg';
import { ReactComponent as Edit } from '../../assets/icons/ic_edit.svg';
import { ReactComponent as iconArrowdown } from '../../assets/icons/ic_down.svg';
import { ReactComponent as More } from '../../assets/icons/ic_more.svg';
import { ReactComponent as Location } from '../../assets/icons/ic_map.svg';

const Icon = ({ type, color }) => {
  const _getIcon = icon => {
    let componentIcon;

    switch (icon) {
      case 'search':
        componentIcon = Search;
        break;

      case 'filter':
        componentIcon = Filter;
        break;

      case 'file':
        componentIcon = File;
        break;

      case 'add-file':
        componentIcon = AddFile;
        break;

      case 'plus':
        componentIcon = Plus;
        break;

      case 'back':
        componentIcon = Back;
        break;

      case 'file-big':
        componentIcon = FileBig;
        break;

      case 'delete':
        componentIcon = Delete;
        break;

      case 'tick':
        componentIcon = Tick;
        break;

      case 'book':
        componentIcon = Book;
        break;

      case 'close':
        componentIcon = Close;
        break;
      case 'edit':
        componentIcon = Edit;
        break;
      case 'more':
        componentIcon = More;
        break;
      case 'arrow-down':
        componentIcon = iconArrowdown;
        break;

      case 'location':
        componentIcon = Location;
        break;
      case 'login_as':
        componentIcon = LoginAs;
        break;

      default:
        componentIcon = Plus;
        break;
    }

    return componentIcon;
  };

  let IconComponent = _getIcon(type);

  return <IconComponent style={color && { fill: color, stroke: color }} />;
};

Icon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  type: 'plus',
};

export default Icon;
