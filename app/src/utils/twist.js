import { Twisters } from 'twisters';
import './helper.js';
import a8_0x5e5242 from './logger.js';
import a8_0x384e57 from '../core/core.js';
import { privateKey } from '../../accounts/accounts.js';
import { RPC } from '../core/network/rpc.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ['log'](_0x2ea5df = '', _0x3a2468 = '', _0x28b4bd = new a8_0x384e57(), _0xdbbe20) {
    const _0x4bac8b = privateKey.find(_0x4e8ac7 => _0x4e8ac7.pk == _0x3a2468);
    const _0x441e86 = privateKey.indexOf(_0x4bac8b);
    if (_0xdbbe20 == undefined) {
      a8_0x5e5242.info("Account " + (_0x441e86 + 0x1) + " - " + _0x2ea5df);
      _0xdbbe20 = '-';
    }
    const _0x520f1e = _0x28b4bd.address ?? '-';
    const _0x27709c = _0x28b4bd.balance ?? '-';
    const _0x538bbc = _0x28b4bd.point ?? {};
    const _0x3fc02e = _0x538bbc.totalPoints ?? '-';
    const _0x3ec330 = _0x538bbc.today ?? '-';
    this.twisters.put(_0x3a2468, {
      'text': "\n================== Account " + (_0x441e86 + 0x1) + " =================\nAddress      : " + _0x520f1e + "\nBalance      : " + _0x27709c + " " + RPC.SYMBOL + "\nPoint        : Total " + _0x3fc02e + " | Today " + _0x3ec330 + "\n\nStatus : " + _0x2ea5df + "\nDelay : " + _0xdbbe20 + "\n=============================================="
    });
  }
  ["info"](_0x5e8c42 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x5e8c42 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ["clear"](_0x362c77) {
    this.twisters.remove(_0x362c77);
  }
}
export default new Twist();