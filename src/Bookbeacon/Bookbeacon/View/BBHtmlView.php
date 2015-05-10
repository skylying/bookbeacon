<?php
/**
 * Part of achiever project. 
 *
 * @copyright  Copyright (C) 2011 - 2015 Achiever, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 */

namespace BookBeacon\BookBeacon\View;


use Joomla\Model\ModelInterface;
use Joomla\View\AbstractHtmlView;
use Windwalker\Data\Data;

/**
 * Class ACHtmlView
 *
 * @since 1.0
 */
class BBHtmlView extends AbstractHtmlView
{
	/**
	 * Property data.
	 *
	 * @var \Windwalker\Data\Data
	 */
	protected $data;

	/**
	 * Constructor
	 *
	 * @param Data              $data
	 * @param \SplPriorityQueue $paths
	 */
	public function __construct(Data $data, \SplPriorityQueue $paths = null)
	{
		$this->data = ($data instanceof Data) ? $data : new Data($data);

		$this->paths = isset($paths) ? $paths : $this->loadPaths();
	}

	/**
	 * getDataByKey
	 *
	 * @param $key
	 * @param $default
	 *
	 * @return  mixed
	 */
	public function getDataByKey($key, $default)
	{
		return isset($this->data[$key]) ? $this->data[$key] : $default;
	}

	/**
	 * setDataByKey
	 *
	 * @param $key
	 * @param $value
	 *
	 * @return  $this
	 */
	public function setDataByKey($key, $value)
	{
		$this->data[$key] = $value;

		return $this;
	}

	/**
	 * getData
	 *
	 * @return  Data
	 */
	public function getData()
	{
		return $this->data;
	}

	/**
	 * setData
	 *
	 * @param $data
	 *
	 * @return  $this
	 */
	public function setData($data)
	{
		$this->data = $data;

		return $this;
	}

}
 