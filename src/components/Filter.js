/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter(props) {
  return (
    <div className="panel-tabs">
      <div class="tabs">
        <ul>
          <li 
            className={props.filter === 'all' ? 'is-active' : ''} 
            onClick={() => {props.filterStatus('all')}}
            ><a>All</a>
          </li>

          <li 
            className={props.filter === 'unactive' ? 'is-active' : ''} 
            onClick={() => {props.filterStatus('unactive')}}
            ><a>Unactive</a>
          </li>

          <li 
            className={props.filter === 'active' ? 'is-active' : ''} 
            onClick={() => {props.filterStatus('active')}}
            ><a>Active</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter